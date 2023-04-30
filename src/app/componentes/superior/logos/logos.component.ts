import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})

export class LogosComponent implements OnInit {
  logosURL="https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1668983675/Dise%C3%B1o%20sin%20t%C3%ADtulo%20%2817%29.png";
  apURL="http://argentinaprograma.inti.gob.ar";
  intiURL="http://www.inti.gob.ar";
  meconURL="http://www.mecon.gob.ar";

  ngOnInit(): void {
    
  }
}
