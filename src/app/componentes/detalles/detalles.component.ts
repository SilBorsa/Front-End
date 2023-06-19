import { Component, OnInit } from '@angular/core';
import { MostrarLabService } from 'src/app/service/mostrar-lab.service';
import { MostrarPyService } from 'src/app/service/mostrar-py.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  mostrarLab=false;
  mostrarPy=false;
  isLogged=false;

  constructor (private mostrarLabService: MostrarLabService, 
               private mostrarPyService: MostrarPyService,
               private tokenService: TokenService) {}

  ngOnInit(): void { 
  if(this.tokenService.getToken()){
     this.isLogged=true;
   } else {
     this.isLogged=false;
   }
  }

  desplazarLab() {
    const expLab = document.getElementById('empresas');
    if (expLab) {
      expLab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarLab() {
    document.body.classList.add('modal-open');
    this.mostrarLabService.abrirMostrarLab();
    this.desplazarLab();
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
