import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/modelo/proyecto';
import { MostrarPyService } from 'src/app/service/mostrar-py.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-py',
  templateUrl: './editar-py.component.html',
  styleUrls: ['./editar-py.component.css']
})
export class EditarPyComponent implements OnInit, OnDestroy{
  idPy?: number; 
  idPersona: number = 1;
  nombrePy: string = '';
  periodoPy: string = '';
  descPy: string ='';
  fotoPy: number = 0;
  proy: Proyecto[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  pyCreado: Proyecto = new Proyecto(1,"","","",0);
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  pyEditado: Proyecto = new Proyecto(1,"","","",0);

  errMsj!: string;

  abrirMostrarPy=false;
  private subscription: Subscription;

  constructor(private mostrarPyService: MostrarPyService,
              private pyService: ProyectoService,
              //private router: Router
              ) {
      this.subscription = this.mostrarPyService.abrirMostrarPy$
          .subscribe(abrirMostrarPy => { this.abrirMostrarPy = abrirMostrarPy; });
}

  ngOnInit(): void {
    this.pyService.listarPy()
      .subscribe(proy => this.proy = proy);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarPy() {
    document.body.classList.remove('modal-open');
    this.mostrarPyService.cerrarMostrarPy();
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
    if (this.pyEditado && this.pyEditado.idPy) {
      this.pyService.updatePy(this.pyEditado.idPy, this.pyEditado)
        .subscribe(response => {
          this.pyService.listarPy().subscribe(proy => this.proy = proy);
          alert(`Se actualizaron los datos de ${this.pyEditado.nombrePy}.`);
          this.filaEditable = false;
        }, error => {
          alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre del proyecto, verifique si ya no esta cargado`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(py: Proyecto) {
    this.filaEditable = true;
    this.pyEditado = {...py};
  }
  
  /* elimina el registro seleccionado */
  borrarPy(IdPy?: number) {
    if(IdPy!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar el proyecto #${IdPy}?`);
      if(confirmarEliminacion) {
        this.pyService.deletePy(IdPy)
          .subscribe(data => {
            alert('Se ha eliminado el proy');
            this.pyService.listarPy().subscribe(proy => this.proy = proy);
          }, error => {
            alert('No pudo eliminarse el proyecto');
          });
      } else {
          alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarPy(py: Proyecto) {
    const miPy = new Proyecto(this.pyCreado.idPersona,
                              this.pyCreado.nombrePy,
                              this.pyCreado.periodoPy,
                              this.pyCreado.descPy,
                              this.pyCreado.fotoPy)
    this.pyService.savePy(miPy)
    .subscribe(() => {
      alert(`Se ha agregado ${this.pyCreado.nombrePy}`);
      this.pyService.listarPy().subscribe(proy => this.proy = proy);
      this.pyCreado.nombrePy='';
      this.pyCreado.periodoPy='';
      this.pyCreado.descPy='';
      this.pyCreado.fotoPy=0;
      this.filaVisible = false;
    }, error => {
        alert('No pudo agregarse el proyecto, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
