import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  persona: Persona = new Persona("","","");

  constructor(public personaService: PersonaService) {
  }

  ngOnInit(): void {
  //  this.personaService.getPersona().subscribe(data => {this.persona = data} )
  }
}
