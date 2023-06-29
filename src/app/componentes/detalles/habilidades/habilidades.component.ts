import { Component, OnInit } from '@angular/core';
import { Blanda } from 'src/app/modelo/blanda';
import { Dura } from 'src/app/modelo/dura';
import { BlandaService } from 'src/app/service/blanda.service';
import { DuraService } from 'src/app/service/dura.service';
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

  dura: Dura[] = [{ idPersona: 1,
                    nombreDura:'',
                    porcentaje: 0,
                    num: 0,
                    giro: 0,
                    colorDura: ''}]

  blanda: Blanda[] = [{ idPersona: 1,
                        nombreBlanda:'',
                        colorBlanda: '',
                        url_imgBlanda: ''}]
  
  mostrarDuras=false;
  mostrarBlandas=false;
  isLogged=false;

  constructor (private mostrarDurasService: MostrarDurasService,
               private mostrarBlandasService: MostrarBlandasService,
               private duraService: DuraService,
               private blandaService: BlandaService,
               private tokenService: TokenService) {}

  ngOnInit(): void {
  this.duraService.listarHard()
    .subscribe(dura => this.dura = dura);
  this.blandaService.listarSoft()
    .subscribe(blanda => this.blanda = blanda);
  if(this.tokenService.getToken()){
      this.isLogged=true;
   } else {
     this.isLogged=false;
   }
  }

  desplazarHard() {
    const hard = document.getElementById('hards');
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
    const soft = document.getElementById('softs');
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
