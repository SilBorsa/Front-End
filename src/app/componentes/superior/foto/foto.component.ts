import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  fotoURL="../assets/mini-yo.jpg";
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";
  
  ngOnInit(): void {
    
  }
}
