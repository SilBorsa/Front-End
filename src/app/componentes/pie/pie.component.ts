import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPieService } from 'src/app/service/mostrar-pie.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

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

  idPersona: number = 1;
 
  mostrarPie=false;
  isLogged=false;

  persona: Persona [] = [{nombrePersona:"",
                          apellidoPersona:"",
                          subTitulo:"",
                          emailPersona:"",
                          celuPersona:"",
                          acercaPersona:"",
                          url_imgPersona:""}]; 
  
  constructor(private personaService: PersonaService,
              private mostrarPieService: MostrarPieService,
              private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.personaService.listar()
    .subscribe(persona => this.persona = persona);
    if(this.tokenService.getToken()){
       this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  abrirMostrarPie() {
    document.body.classList.add('modal-open');
    this.mostrarPieService.abrirMostrarPie();
  }
}
