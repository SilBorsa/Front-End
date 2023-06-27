import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/modelo/laboral';
import { LaboralService } from 'src/app/service/laboral.service';
import { MostrarLabService } from 'src/app/service/mostrar-lab.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  laboral: Laboral[] = [{idPersona: 1,
                         nombreEmpresa: "",
                         periodoEmpresa: "",
                         urlEmpresa:"",
                         url_imgLab:"",
                         descEmpresa:""}];

  mostrarLab=false;
  isLogged= false;

  constructor(private laboralService: LaboralService, 
              private mostrarLabService: MostrarLabService,
              private tokenService: TokenService) {}

  ngOnInit(): void {
  this.laboralService.listarLab()
    .subscribe(laboral => this.laboral = laboral);
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

}
