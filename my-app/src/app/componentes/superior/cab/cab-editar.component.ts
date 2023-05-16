import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cab-editar',
  templateUrl: './cab-editar.component.html',
  styleUrls: ['./cab.component.css']
})

export class CabEditarComponent implements OnInit{

  fbURL="https://www.facebook.com/Tobias.te.amo";
  pinURL="https://ar.pinterest.com/silborsa";
  linURL="https://www.linkedin.com/in/licspb";
  tgmURL="https://t.me/51lv4n4_ok";
  
  fbSRC="../../../../assets/face.png";
  pinSRC="../../../../assets/pint.png";
  linSRC="../../../../assets/lin.png";
  tgmSRC="../../../../assets/tgm.png";
 // logInSRC = "../assets/login.png";
 // logOutSRC = "../assets/logout.png";

  fbALT="mi facebook";
  pinALT="mi pinterest";
  linALT="mi linked in";
  tgmALT="mi telegram";
  logALT="solo para personas autorizadas";

  mostrarLogin=false;
  isLogged=false;

  constructor(protected mostrarLoginService: MostrarLoginService, private router: Router, private tokenService: TokenService) { }

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
    
}
