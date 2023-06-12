import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { MostrarFotoService } from 'src/app/service/mostrar-foto.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  fotoURL="../assets/mini-yo.jpg";
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  mostrarFoto=false;

  persona: Persona = {nombrePersona:"",
                      apellidoPersona:"",
                      subTitulo:"",
                      emailPersona:"",
                      celuPersona:"",
                      acercaPersona:"",
                      url_imgPersona:""}; /*= new Persona("","","","","","","");*/
    
  constructor(private personaService: PersonaService,
              private mostrarFotoService: MostrarFotoService) { }
  
  ngOnInit(): void {
    const idPersona = 1;
    this.personaService.getPersona(idPersona)
        .subscribe(persona => {this.persona = persona;});
  }

  abrirMostrarFoto() {
    document.body.classList.add('modal-open');
    this.mostrarFotoService.abrirMostrarFoto();
  }

}
