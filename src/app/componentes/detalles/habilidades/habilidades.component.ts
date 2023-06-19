import { Component, OnInit } from '@angular/core';
import { MostrarBlandasService } from 'src/app/service/mostrar-blandas.service';
import { MostrarDurasService } from 'src/app/service/mostrar-duras.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";
  
  mostrarEdu=false;
  mostrarTics=false;
  isLogged=false;

  constructor (private mostrarDurasService: MostrarDurasService,
               private mostrarBlandasService: MostrarBlandasService,
               private tokenService: TokenService) {}

  ngOnInit(): void {
  if(this.tokenService.getToken()){
      this.isLogged=true;
   } else {
     this.isLogged=false;
   }
  }

  desplazarHard() {
    const hard = document.getElementById('duras');
    if (hard) {
      hard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarDuras() {
    document.body.classList.add('modal-open');
    this.mostrarDurasService.abrirMostrarDuras();
    this.desplazarHard();
  }

  desplazarSoft() {
    const soft = document.getElementById('blandas');
    if (soft) {
      soft.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarBlandas() {
    document.body.classList.add('modal-open');
    this.mostrarBlandasService.abrirMostrarBlandas();
    this.desplazarSoft();
  }
}
