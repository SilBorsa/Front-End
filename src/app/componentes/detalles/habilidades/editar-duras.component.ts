import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dura } from 'src/app/modelo/dura';
import { DuraService } from 'src/app/service/dura.service';
import { MostrarDurasService } from 'src/app/service/mostrar-duras.service';

@Component({
  selector: 'app-editar-duras',
  templateUrl: './editar-duras.component.html',
  styleUrls: ['./editar-duras.component.css']
})
export class EditarDurasComponent implements OnInit, OnDestroy{
  idDura?: number; 
  idPersona: number = 1;
  nombreDura: string = '';
  porcentaje: number = 0;
//  num: string = '';
//  giro: string = '';
  colorDura: string = '';
  hard: Dura[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  hardCreado: Dura = new Dura(1,"",0,"");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  hardEditado: Dura = new Dura(1,"",0,"");

  errMsj!: string;

  abrirMostrarDuras=false;
  private subscription: Subscription;

  constructor(private mostrarDurasService: MostrarDurasService,
              private hardService: DuraService,
              //private router: Router
              ) {
      this.subscription = this.mostrarDurasService.abrirMostrarDuras$
          .subscribe(abrirMostrarDuras => { this.abrirMostrarDuras = abrirMostrarDuras; });
}

  ngOnInit(): void {
    this.hardService.listarHard()
      .subscribe(hard => this.hard = hard);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarDuras() {
    document.body.classList.remove('modal-open');
    this.mostrarDurasService.cerrarMostrarDuras();
    window.location.reload();
  }

  /* muestra el formulario de carga */
  mostrarFila(): void {
    this.filaVisible = true;
  }

  /* oculta el formulario de carga */
  cancelarAgregar(): void {
    this.filaVisible = false;
  }

  /* guarda los cambios del registro modificado */
  actualizarFila() {
    if (this.hardEditado && this.hardEditado.idDura) {
      this.hardService.updateHard(this.hardEditado.idDura, this.hardEditado)
        .subscribe(response => {
          this.hardService.listarHard().subscribe(hard => this.hard = hard);
          alert(`Se actualizaron los datos de ${this.hardEditado.nombreDura}.`);
          this.filaEditable = false;
        }, error => {
          alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre de la habilidad, verifique si ya esta cargada`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(hard: Dura) {
    this.filaEditable = true;
    this.hardEditado = {...hard};
  }
  
  /* elimina el registro seleccionado */
  borrarHard(idDura?: number) {
    if(idDura!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar la habilidad #${idDura}?`);
      if(confirmarEliminacion) {
        this.hardService.deleteHard(idDura)
          .subscribe(data => {
            alert('Se ha eliminado la habilidad');
            this.hardService.listarHard().subscribe(hard => this.hard = hard);
          }, error => {
            alert('No pudo eliminarse la habilidad');
          });
      } else {
          alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarHard(hard: Dura) {
    const mihard = new Dura(this.hardCreado.idPersona,
                              this.hardCreado.nombreDura,
                              this.hardCreado.porcentaje,
                              this.hardCreado.colorDura)
    this.hardService.saveHard(mihard)
    .subscribe(() => {
      alert(`Se ha agregado ${this.hardCreado.nombreDura}`);
      this.hardService.listarHard().subscribe(hard => this.hard = hard);
      this.hardCreado.nombreDura='';
      this.hardCreado.porcentaje=0;
      this.hardCreado.colorDura='';
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse la habilidad, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
