import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelo/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  sol="&#127774;";

  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data} )
  }
}
