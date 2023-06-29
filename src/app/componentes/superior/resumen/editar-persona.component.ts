import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPersonaService } from 'src/app/service/mostrar-persona.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit, OnDestroy {
  idPersona: number = 1;
  nombrePersona: string = '';
  apellidoPersona: string = '';
  subTitulo: string = '';
  emailPersona: string = '';
  celuPersona: string = '';
  acercaPersona: string = '';
  url_imgPersona: string = '';
  personas: Persona[] = [];

  filaEditable: boolean = false;
  persEditada: Persona = new Persona("","","","","","","");

  abrirMostrarPersona=false;
  private subscription: Subscription;

  constructor(private mostrarPersonaService: MostrarPersonaService,
              private personaService: PersonaService,) {
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
    window.location.reload();
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
  
}
