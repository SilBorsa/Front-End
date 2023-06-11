import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";
  
  ngOnInit(): void {
    
  }
}
