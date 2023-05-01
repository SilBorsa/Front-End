import { Component, OnInit } from '@angular/core';
import { MostrarService } from 'src/app/service/mostrar.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(protected mostrarService: MostrarService) { }

  ngOnInit(): void {
    
  }
}
