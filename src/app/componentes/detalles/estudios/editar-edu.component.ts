import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Estudio } from 'src/app/modelo/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { MostrarEduService } from 'src/app/service/mostrar-edu.service';

@Component({
  selector: 'app-editar-edu',
  templateUrl: './editar-edu.component.html',
  styleUrls: ['./editar-edu.component.css']
})
export class EditarEduComponent implements OnInit, OnDestroy{
  idPersona: number = 1;
  idEstudio?: number; 
  tituloEstudio: string ='';
  periodoEstudio: string = '';
  nombreInstituto: string = '';
  urlInstituto: string = '';
  url_imgEdu: string = '';
  estudio: Estudio[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  eduCreado: Estudio = new Estudio(1,"","","","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  eduEditado: Estudio = new Estudio(1,"","","","","");

  errMsj!: string;

  abrirMostrarEdu=false;
  private subscription: Subscription;

  constructor(private mostrarEduService: MostrarEduService,
              private eduService: EstudioService,
              //private router: Router
              ) {
      this.subscription = this.mostrarEduService.abrirMostrarEdu$
          .subscribe(abrirMostrarEdu => { this.abrirMostrarEdu = abrirMostrarEdu; });
}

  ngOnInit(): void {
    this.eduService.listarEdu()
      .subscribe(estudio => this.estudio = estudio);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarEdu() {
    document.body.classList.remove('modal-open');
    this.mostrarEduService.cerrarMostrarEdu();
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
    if (this.eduEditado && this.eduEditado.idEstudio) {
      this.eduService.updateEdu(this.eduEditado.idEstudio, this.eduEditado)
        .subscribe(response => {
          this.eduService.listarEdu().subscribe(estudio => this.estudio = estudio);
          alert(`Se actualizaron los datos de ${this.eduEditado.tituloEstudio}.`);
          this.filaEditable = false;
        }, error => {
          alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre del instituto o el titulo obtenido, verifique si ya no esta cargado`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(edu: Estudio) {
    this.filaEditable = true;
    this.eduEditado = {...edu};
  }
  
  /* elimina el registro seleccionado */
  borrarEdu(idEstudio?: number) {
    if(idEstudio!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar al estudio #${idEstudio}?`);
      if(confirmarEliminacion) {
        this.eduService.deleteEdu(idEstudio)
          .subscribe(data => {
            alert('Se ha eliminado el estudio');
            this.eduService.listarEdu().subscribe(estudio => this.estudio = estudio);
          }, error => {
            alert('No pudo eliminarse el estudio');
          });
      } else {
          alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarEdu(edu: Estudio) {
    const miEdu = new Estudio(this.eduCreado.idPersona,
                              this.eduCreado.tituloEstudio,
                              this.eduCreado.periodoEstudio,
                              this.eduCreado.nombreInstituto,
                              this.eduCreado.urlInstituto,
                              this.eduCreado.url_imgInst) 
    this.eduService.saveEdu(miEdu)
    .subscribe(() => {
      alert(`Se ha agregado ${this.eduCreado.tituloEstudio}`);
      this.eduService.listarEdu().subscribe(estudio => this.estudio = estudio);
      this.eduCreado.tituloEstudio='';
      this.eduCreado.periodoEstudio='';
      this.eduCreado.nombreInstituto='';
      this.eduCreado.urlInstituto='';
      this.eduCreado.url_imgInst='';
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse el estudio, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
