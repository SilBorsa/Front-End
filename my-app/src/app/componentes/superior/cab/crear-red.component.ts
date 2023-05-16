import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redes } from 'src/app/modelo/redes';
import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { RedService } from 'src/app/service/red.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crear-red',
  templateUrl: './crear-red.component.html',
  styleUrls: ['./cab.component.css']
})

export class CrearRedComponent implements OnInit{
  idPersona!: number;
  nombreRed: string = '';
  urlRed: string = '';
  url_imgRed: string = '';

  constructor(private redService: RedService, private router: Router) { }

  ngOnInit(): void {
  }

  onNuevaRed(): void {
    const red = new Redes(this.idPersona, this.nombreRed, this.urlRed, this.url_imgRed);
    this.redService.save(red).subscribe(data=> {
      alert("Red agregada!");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo agregar la red. Verifique datos.");
      this.router.navigate(['']);
    }
    )
  }
}
