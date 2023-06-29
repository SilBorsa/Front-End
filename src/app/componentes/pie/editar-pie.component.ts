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
  persona: Persona[] = [];

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
      .subscribe(persona => this.persona = persona);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarPie() {
    document.body.classList.remove('modal-open');
    this.mostrarPieService.cerrarMostrarPie();
    window.location.reload();
  }

  /* guarda los cambios del registro modificado */
  actualizarFila() {
    if (this.persEditada && this.persEditada.idPersona) {
      this.personaService.update(this.persEditada.idPersona, this.persEditada)
        .subscribe(response => {
          this.personaService.listar().subscribe(persona => this.persona = persona);
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
