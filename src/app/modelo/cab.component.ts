import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { MostrarRedesService } from 'src/app/service/mostrar-redes.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabComponent implements OnInit{

  fbURL="https://www.facebook.com/Tobias.te.amo";
  pinURL="https://ar.pinterest.com/silborsa";
  linURL="https://www.linkedin.com/in/licspb";
  tgmURL="https://t.me/51lv4n4_ok";
  
  fbSRC="../../../../assets/face.png";
  pinSRC="../../../../assets/pint.png";
  linSRC="../../../../assets/lin.png";
  tgmSRC="../../../../assets/tgm.png";
  logInSRC = "../../../../assets/login.png";
  logOutSRC = "../../../../assets/logout.png";
  editSRC = "../../../../assets/editar.png";

  fbALT="mi facebook";
  pinALT="mi pinterest";
  linALT="mi linked in";
  tgmALT="mi telegram";
  logALT="solo para personas autorizadas";
  editALT="agregar, editar, eliminar";

  mostrarLogin=false;
  mostrarRedes=false;
  isLogged=false;

  constructor(protected mostrarLoginService: MostrarLoginService,
              protected mostrarRedesService: MostrarRedesService, 
              private router: Router, 
              private tokenService: TokenService) { }

  ngOnInit(): void {
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
