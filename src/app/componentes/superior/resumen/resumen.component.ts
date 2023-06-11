import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  persona: Persona = {nombrePersona:"",
                      apellidoPersona:"",
                      subTitulo:"",
                      emailPersona:"",
                      celuPersona:"",
                      acercaPersona:"",
                      url_imgPersona:""}; /*= new Persona("","","","","","","");*/
    
  constructor(public personaService: PersonaService) {
  }

  ngOnInit() {
    const idPersona = 1;
    this.personaService.getPersona(idPersona)
        .subscribe(persona => {this.persona = persona;});
  }
}
