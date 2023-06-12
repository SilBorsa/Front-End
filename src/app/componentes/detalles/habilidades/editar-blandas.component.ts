import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blanda } from 'src/app/modelo/blanda';
import { BlandaService } from 'src/app/service/blanda.service';
import { MostrarBlandasService } from 'src/app/service/mostrar-blandas.service';

@Component({
  selector: 'app-editar-blandas',
  templateUrl: './editar-blandas.component.html',
  styleUrls: ['./editar-blandas.component.css']
})
export class EditarBlandasComponent implements OnInit, OnDestroy{
  idBlanda?: number; 
  idPersona: number = 1;
  nombreBlanda: string = '';
  colorBlanda: string = '';
  url_imgBlanda: string = '';
  soft: Blanda[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  softCreado: Blanda = new Blanda(1,"","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  softEditado: Blanda = new Blanda(1,"","","");

  errMsj!: string;

  abrirMostrarBlandas=false;
  private subscription: Subscription;

  constructor(private mostrarBlandasService: MostrarBlandasService,
              private softService: BlandaService,
              //private router: Router
              ) {
      this.subscription = this.mostrarBlandasService.abrirMostrarBlandas$
          .subscribe(abrirMostrarBlandas => { this.abrirMostrarBlandas = abrirMostrarBlandas; });
}

  ngOnInit(): void {
    this.softService.listarSoft()
      .subscribe(soft => this.soft = soft);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarBlandas() {
    document.body.classList.remove('modal-open');
    this.mostrarBlandasService.cerrarMostrarBlandas();
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
    if (this.softEditado && this.softEditado.idBlanda) {
      this.softService.updateSoft(this.softEditado.idBlanda, this.softEditado)
        .subscribe(response => {
          this.softService.listarSoft().subscribe(soft => this.soft = soft);
          alert(`Se actualizaron los datos de ${this.softEditado.nombreBlanda}.`);
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
  editarFila(soft: Blanda) {
    this.filaEditable = true;
    this.softEditado = {...soft};
  }
  
  /* elimina el registro seleccionado */
  borrarSoft(idBlanda?: number) {
    if(idBlanda!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar la habilidad #${idBlanda}?`);
      if(confirmarEliminacion) {
        this.softService.deleteSoft(idBlanda)
          .subscribe(data => {
            alert('Se ha eliminado la habilidad');
            this.softService.listarSoft().subscribe(soft => this.soft = soft);
          }, error => {
            alert('No pudo eliminarse la habilidad');
          });
      } else {
          alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarSoft(soft: Blanda) {
    const miSoft = new Blanda(this.softCreado.idPersona,
                              this.softCreado.nombreBlanda,
                              this.softCreado.colorBlanda,
                              this.softCreado.url_imgBlanda)
    this.softService.saveSoft(miSoft)
    .subscribe(() => {
      alert(`Se ha agregado ${this.softCreado.nombreBlanda}`);
      this.softService.listarSoft().subscribe(soft => this.soft = soft);
      this.softCreado.nombreBlanda='';
      this.softCreado.colorBlanda='';
      this.softCreado.url_imgBlanda='';
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse la habilidad, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
