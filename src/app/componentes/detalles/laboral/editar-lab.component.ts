import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Laboral } from 'src/app/modelo/laboral';
import { LaboralService } from 'src/app/service/laboral.service';
import { MostrarLabService } from 'src/app/service/mostrar-lab.service';

@Component({
  selector: 'app-editar-lab',
  templateUrl: './editar-lab.component.html',
  styleUrls: ['./editar-lab.component.css']
})
export class EditarLabComponent implements OnInit, OnDestroy {
  idPersona: number = 1;
  idLaboral?: number; 
  periodoEmpresa: string = '';
  nombreEmpresa: string = '';
  urlEmpresa: string = '';
  url_imgLab: string = '';
  descEmpresa: string ='';
  laboral: Laboral[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  labCreado: Laboral = new Laboral(1,"","","","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  labEditado: Laboral = new Laboral(1,"","","","","");

  errMsj!: string;

  abrirMostrarLab=false;
  private subscription: Subscription;

  constructor(private mostrarLabService: MostrarLabService,
              private labService: LaboralService,
              //private router: Router
              ) {
      this.subscription = this.mostrarLabService.abrirMostrarLab$
          .subscribe(abrirMostrarLab => { this.abrirMostrarLab = abrirMostrarLab; });
}

  ngOnInit(): void {
    this.labService.listarLab()
      .subscribe(laboral => this.laboral = laboral);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarLab() {
    document.body.classList.remove('modal-open');
    this.mostrarLabService.cerrarMostrarLab();
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
    if (this.labEditado && this.labEditado.idLaboral) {
      this.labService.updateLab(this.labEditado.idLaboral, this.labEditado)
        .subscribe(response => {
          this.labService.listarLab().subscribe(laboral => this.laboral = laboral);
          alert(`Se actualizaron los datos de ${this.labEditado.nombreEmpresa}.`);
          this.filaEditable = false;
        }, error => {
          alert(`Los datos no pudieron modificarse.`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(lab: Laboral) {
    this.filaEditable = true;
    this.labEditado = {...lab};
  }
  
  /* elimina el registro seleccionado */
  borrarLab(idLaboral?: number) {
    if(idLaboral!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar el trabajo #${idLaboral}?`);
      if(confirmarEliminacion) {
        this.labService.deleteLab(idLaboral)
          .subscribe(data => {
            alert('Se ha eliminado el trabajo');
            this.labService.listarLab().subscribe(laboral => this.laboral = laboral);
          }, error => {
            alert('No pudo eliminarse el trabajo');
          });
      } else {
          alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarLab(lab: Laboral) {
    const miLab = new Laboral(this.labCreado.idPersona,
                              this.labCreado.periodoEmpresa,
                              this.labCreado.nombreEmpresa,
                              this.labCreado.urlEmpresa,
                              this.labCreado.url_imgLab,
                              this.labCreado.descEmpresa,)
    this.labService.saveLab(miLab)
    .subscribe(() => {
      alert(`Se ha agregado ${this.labCreado.nombreEmpresa}`);
      this.labService.listarLab().subscribe(laboral => this.laboral = laboral);
      this.labCreado.periodoEmpresa='';
      this.labCreado.nombreEmpresa='';
      this.labCreado.urlEmpresa='';
      this.labCreado.url_imgLab='';
      this.labCreado.descEmpresa='';
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse la empresa, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
