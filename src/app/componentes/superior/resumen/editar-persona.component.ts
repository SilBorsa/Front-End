import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPersonaService } from 'src/app/service/mostrar-persona.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
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
  persCreada: Persona = new Persona("","","","","","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  persEditada: Persona = new Persona("","","","","","","");

  errMsj!: string;

  abrirMostrarPersona=false;
  private subscription: Subscription;

  constructor(private mostrarPersonaService: MostrarPersonaService,
              private personaService: PersonaService,
              //private router: Router
              ) {
      this.subscription = this.mostrarPersonaService.abrirMostrarPersona$
          .subscribe(abrirMostrarPersona => { this.abrirMostrarPersona = abrirMostrarPersona; });
}

  ngOnInit(): void {
    this.personaService.listar()
      .subscribe(persona => this.personas = persona);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarPersona() {
    document.body.classList.remove('modal-open');
    this.mostrarPersonaService.cerrarMostrarPersona();
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
        alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre de la red, verifique si ya no esta cargada.`);
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

  /* guarda el registro creado */
  guardar(persona: Persona) {
    const miPersona = new Persona(this.persCreada.nombrePersona,
                                  this.persCreada.apellidoPersona,
                                  this.persCreada.subTitulo,
                                  this.persCreada.emailPersona,
                                  this.persCreada.celuPersona,
                                  this.persCreada.acercaPersona,
                                  this.persCreada.url_imgPersona)
    this.personaService.save(miPersona)
    .subscribe(() => {
      alert(`Se ha agregado ${this.persCreada.nombrePersona}`);
      this.personaService.listar().subscribe(persona => this.personas = persona);
      this.persCreada.nombrePersona='';
      this.persCreada.apellidoPersona='';
      this.persCreada.subTitulo='';
      this.persCreada.emailPersona='';
      this.persCreada.celuPersona='';
      this.persCreada.acercaPersona='';
      this.persCreada.url_imgPersona='';
      this.filaVisible = false;
    }, error => {
      alert('No pudo agregarse la red, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
