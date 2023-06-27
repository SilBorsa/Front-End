import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelo/proyecto';
import { MostrarPyService } from 'src/app/service/mostrar-py.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  mostrarPy=false;
  isLogged = false;

  proy: Proyecto[] = [{idPersona: 1,
                       nombrePy:"",
                       periodoPy:"",
                       descPy:"",
                       fotoPy:0}];


  constructor(private mostrarPyService: MostrarPyService,
              private pyService: ProyectoService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.pyService.listarPy()
      .subscribe(proy => this.proy = proy);
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  desplazarPy() {
    const proy = document.getElementById('proy');
    if (proy) {
      proy.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarPy() {
    document.body.classList.add('modal-open');
    this.mostrarPyService.abrirMostrarPy();
    this.desplazarPy();
  }

}
