import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/modelo/laboral';
import { LaboralService } from 'src/app/service/laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  cgnURL="https://www.argentina.gob.ar/economia/sechacienda/cgn";
  migraURL="https://www.argentina.gob.ar/interior/migraciones";

  cgnSRC="../../../../assets/logo-mecon.png";
  migraSRC="../../../../assets/logo-migra.png";

  lab: Laboral[] = []; 
  isLogged= false;

  constructor(private laboralService: LaboralService, private tokenService: TokenService) {}

  ngOnInit(): void {
  //  this.cargarLab();
  //  if(this.tokenService.getToken()) {
  //    this.isLogged=true;
  //  } else {
  //    this.isLogged=false;
  //    }
  }

  //cargarLab(): void {
  //  this.laboralService.lista().subscribe(data=>{this.lab = data;})
  //}
}
