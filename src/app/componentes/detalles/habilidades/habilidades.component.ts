import { Component, OnInit } from '@angular/core';
import { MostrarBlandasService } from 'src/app/service/mostrar-blandas.service';
import { MostrarDurasService } from 'src/app/service/mostrar-duras.service';

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

  constructor (private mostrarDurasService: MostrarDurasService,
               private mostrarBlandasService: MostrarBlandasService) {}

  ngOnInit(): void {
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
