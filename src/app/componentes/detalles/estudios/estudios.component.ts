import { Component, OnInit } from '@angular/core';
import { MostrarEduService } from 'src/app/service/mostrar-edu.service';
import { MostrarTicsService } from 'src/app/service/mostrar-tics.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  udaURL="https://www.uda.edu.ar";
  rvfURL="https://www.reconstruccionforense.com";
  uaiURL="https://uai.edu.ar";
  icfURL="https://www.forensesargentina.com.ar/";
  iupfaURL="https://www.universidad-policial.edu.ar/";
  apURL="https://argentinaprograma.inti.gob.ar/";
  inapURL="https://capacitacion.inap.gob.ar/";
  capacURL="https://capacitacion.mecon.gob.ar/";

  udaSRC="../assets/logo-uac.png";
  rvfSRC="../assets/logo-rvf.png";
  uaiSRC="../assets/logo-uai.png";
  icfSRC="../assets/logo-icf.png";
  iupfaSRC="../assets/logo-iupfa.png";
  apSRC="../assets/logo-ap.png";
  inapSRC="../assets/logo-inap.png";
  capacSRC="../assets/logo-mecon.png";

  mostrarEdu=false;
  mostrarTics=false;
  isLogged=false;

  constructor (private mostrarEduService: MostrarEduService,
               private mostrarTicsService: MostrarTicsService,
               private tokenService: TokenService) {}

  ngOnInit(): void {
  if(this.tokenService.getToken()){
     this.isLogged=true;
   } else {
     this.isLogged=false;
   }
  }

  desplazarEdu() {
    const edu = document.getElementById('formales');
    if (edu) {
      edu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarEdu() {
    document.body.classList.add('modal-open');
    this.mostrarEduService.abrirMostrarEdu();
    this.desplazarEdu();
  }

  desplazarTics() {
    const tics = document.getElementById('noformales');
    if (tics) {
      tics.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarTics() {
    document.body.classList.add('modal-open');
    this.mostrarTicsService.abrirMostrarTics();
    this.desplazarTics();
  }
}
