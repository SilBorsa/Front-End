import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    
  }
}
