import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-resu-editar',
  templateUrl: './resu-editar.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResuEditarComponent implements OnInit {

  persona: Persona = new Persona("","","");

  constructor(public personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data} )
  }
}
