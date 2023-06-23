import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MostrarPersonaService } from 'src/app/service/mostrar-persona.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

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
                      url_imgPersona:""}; 
    
  constructor(private personaService: PersonaService,
              private mostrarPersonaService: MostrarPersonaService,
              private tokenService: TokenService) { }

  ngOnInit() {
    this.personaService.listar();
    if(this.tokenService.getToken()){
       this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  desplazarPersona() {
    const acerca = document.getElementById('acercaDe');
    if (acerca) {
      acerca.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarPersona() {
    document.body.classList.add('modal-open');
    this.mostrarPersonaService.abrirMostrarPersona();
    this.desplazarPersona();
  }
}
