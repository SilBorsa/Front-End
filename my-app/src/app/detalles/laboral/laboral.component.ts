import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  cgnURL="https://www.argentina.gob.ar/economia/sechacienda/cgn";
  migraURL="https://www.argentina.gob.ar/interior/migraciones";

  cgnSRC="../assets/logo-mecon.png";
  migraSRC="../assets/logo-migraciones.png";

  ngOnInit(): void {
    
  }
}
