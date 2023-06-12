import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPieService } from 'src/app/service/mostrar-pie.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-pie',
  templateUrl: './editar-pie.component.html',
  styleUrls: ['./editar-pie.component.css']
})
export class EditarPieComponent implements OnInit, OnDestroy{
  idPersona: number = 1;
  nombrePersona: string = '';
  apellidoPersona: string = '';
  subTitulo: string = '';
  emailPersona: string = '';
  celuPersona: string = '';
  acercaPersona: string = '';
  url_imgPersona: string = '';
  personas: Persona[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  persEditada: Persona = new Persona("","","","","","","");

  errMsj!: string;

  abrirMostrarPie=false;
  private subscription: Subscription;

  constructor(private mostrarPieService: MostrarPieService,
              private personaService: PersonaService,
              //private router: Router
              ) {
      this.subscription = this.mostrarPieService.abrirMostrarPie$
          .subscribe(abrirMostrarPie => { this.abrirMostrarPie = abrirMostrarPie; });
}

  ngOnInit(): void {
    this.personaService.listar()
      .subscribe(persona => this.personas = persona);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarPie() {
    document.body.classList.remove('modal-open');
    this.mostrarPieService.cerrarMostrarPie();
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
    if (this.persEditada && this.persEditada.idPersona) {
      this.personaService.update(this.persEditada.idPersona, this.persEditada)
        .subscribe(response => {
          this.personaService.listar().subscribe(persona => this.personas = persona);
          alert(`Se actualizaron los datos de ${this.persEditada.nombrePersona}.`);
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
  editarFila(persona: Persona) {
    this.filaEditable = true;
    this.persEditada = {...persona};
  }
  
  /* elimina el registro seleccionado */
  borrar(idPersona?: number) {
    if(idPersona!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar a la persona #${idPersona}?`);
      if(confirmarEliminacion) {
        this.personaService.delete(idPersona)
          .subscribe(data => {
            alert('Se ha eliminado la persona');
            this.personaService.listar().subscribe(persona => this.personas = persona);
          }, error => {
            alert('No pudo eliminarse la persona');
          });
      } else {
        alert('Eliminacion cancelada por el usuario');
      }
    }
  }

}
