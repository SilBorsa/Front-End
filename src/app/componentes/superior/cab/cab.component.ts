import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/modelo/redes';

import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { MostrarRedesService } from 'src/app/service/mostrar-redes.service';
import { RedService } from 'src/app/service/red.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabComponent implements OnInit{

  logInSRC = "../../../../assets/login.png";
  logOutSRC = "../../../../assets/logout.png";
  editSRC = "../../../../assets/editar.png";

  logALT="solo para personas autorizadas";
  editALT="agregar, editar, eliminar";

  idRed?: number; 
  idPersona: number = 1;
  nombreRed: string = '';
  urlRed: string = '';
  url_imgRed: string = '';
  redes: Redes[] = [];

  mostrarLogin=false;
  mostrarRedes=false;
  isLogged=false;

  constructor(protected mostrarLoginService: MostrarLoginService,
              private mostrarRedesService: MostrarRedesService, 
              private redService: RedService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.redService.listarRedes()
        .subscribe(redes => this.redes = redes);
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
      }
  }

  onLogOut(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  abrirModalLogin() {
    document.body.classList.add('modal-open');
    this.mostrarLoginService.abrirModalLogin();
  }

  abrirMostrarRedes() {
    document.body.classList.add('modal-open');
    this.mostrarRedesService.abrirMostrarRedes();
  }

}
