import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})

export class PieComponent implements OnInit{
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";
  
  iconURL="https://www.flaticon.es";
  emojiURL="https://missiveapp.com/open/emoji-mart";
  bootsoon="https://www.npmjs.com/package/ng-circle-progress";

  constructor(){
  }

  ngOnInit(): void {
  }
}
