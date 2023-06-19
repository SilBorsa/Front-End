import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tics } from 'src/app/modelo/tics';
import { MostrarTicsService } from 'src/app/service/mostrar-tics.service';
import { TicsService } from 'src/app/service/tics.service';

@Component({
  selector: 'app-editar-tics',
  templateUrl: './editar-tics.component.html',
  styleUrls: ['./editar-tics.component.css']
})
export class EditarTicsComponent implements OnInit, OnDestroy{
  idPersona: number = 1;
  idTic?: number; 
  cursoTic: string ='';
  periodoTic: string = '';
  nombreInstTic: string = '';
  urlInstTic: string = '';
  url_imgTic: string = '';
  tic: Tics[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  ticCreado: Tics = new Tics(1,"","","","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  ticEditado: Tics = new Tics(1,"","","","","");

  errMsj!: string;

  abrirMostrarTics=false;
  private subscription: Subscription;

  constructor(private mostrarTicsService: MostrarTicsService,
              private ticsService: TicsService,
              //private router: Router
              ) {
      this.subscription = this.mostrarTicsService.abrirMostrarTics$
          .subscribe(abrirMostrarTics => { this.abrirMostrarTics = abrirMostrarTics; });
}

  ngOnInit(): void {
    this.ticsService.listarTic()
      .subscribe(tic => this.tic = tic);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarTics() {
    document.body.classList.remove('modal-open');
    this.mostrarTicsService.cerrarMostrarTics();
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
    if (this.ticEditado && this.ticEditado.idTic) {
      this.ticsService.updateTic(this.ticEditado.idTic, this.ticEditado)
        .subscribe(response => {
          this.ticsService.listarTic().subscribe(tic => this.tic = tic);
          alert(`Se actualizaron los datos de ${this.ticEditado.cursoTic}.`);
          this.filaEditable = false;
        }, error => {
          alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre del instituto o del curso, verifique si ya no esta cargado`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(tic: Tics) {
    this.filaEditable = true;
    this.ticEditado = {...tic};
  }
  
  /* elimina el registro seleccionado */
  borrarTic(idTic?: number) {
    if(idTic!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar el curso #${idTic}?`);
      if(confirmarEliminacion) {
        this.ticsService.deleteTic(idTic)
          .subscribe(data => {
            alert('Se ha eliminado el curso');
            this.ticsService.listarTic().subscribe(tic => this.tic = tic);
          }, error => {
            alert('No pudo eliminarse el curso');
          });
      } else {
            alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarTic(tic: Tics) {
    const miTic = new Tics(this.ticCreado.idPersona,
                              this.ticCreado.cursoTic,
                              this.ticCreado.periodoTic,
                              this.ticCreado.nombreInstTic,
                              this.ticCreado.urlInstTic,
                              this.ticCreado.url_imgTic)
    this.ticsService.saveTic(miTic)
    .subscribe(() => {
      alert(`Se ha agregado el curso ${this.ticCreado.cursoTic}`);
      this.ticsService.listarTic().subscribe(tic => this.tic = tic);
      this.ticCreado.cursoTic='';
      this.ticCreado.periodoTic='';
      this.ticCreado.nombreInstTic='';
      this.ticCreado.urlInstTic='';
      this.ticCreado.url_imgTic='';
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse el curso, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
