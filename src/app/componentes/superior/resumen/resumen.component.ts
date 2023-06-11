import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPersonaService } from 'src/app/service/mostrar-persona.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  mostrarPersona=false;
  isLogged=false;

  persona: Persona = {nombrePersona:"",
                      apellidoPersona:"",
                      subTitulo:"",
                      emailPersona:"",
                      celuPersona:"",
                      acercaPersona:"",
                      url_imgPersona:""}; /*= new Persona("","","","","","","");*/
    
  constructor(private personaService: PersonaService,
              private mostrarPersonaService: MostrarPersonaService) { }

  ngOnInit() {
    const idPersona = 1;
    this.personaService.getPersona(idPersona)
        .subscribe(persona => {this.persona = persona;});
  }

  abrirMostrarPersona() {
    document.body.classList.add('modal-open');
    this.mostrarPersonaService.abrirMostrarPersona();
  }
}
