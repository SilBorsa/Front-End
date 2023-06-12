import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPieService } from 'src/app/service/mostrar-pie.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit{
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";
  
  iconURL="https://www.flaticon.es";
  emojiURL="https://missiveapp.com/open/emoji-mart";
  bootsoon="https://www.npmjs.com/package/ng-circle-progress";

  mostrarPie=false;

  persona: Persona = {nombrePersona:"",
                      apellidoPersona:"",
                      subTitulo:"",
                      emailPersona:"",
                      celuPersona:"",
                      acercaPersona:"",
                      url_imgPersona:""}; /*= new Persona("","","","","","","");*/
    
  constructor(private personaService: PersonaService,
              private mostrarPieService: MostrarPieService) { }
  
  ngOnInit(): void {
    const idPersona = 1;
    this.personaService.getPersona(idPersona)
        .subscribe(persona => {this.persona = persona;});
  }

  abrirMostrarPie() {
    document.body.classList.add('modal-open');
    this.mostrarPieService.abrirMostrarPie();
  }

}
