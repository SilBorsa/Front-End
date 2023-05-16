import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-crear-edu',
  templateUrl: './crear-edu.component.html',
  styleUrls: ['./estudios.component.css']
})
export class CrearEduComponent implements OnInit {
  idPersona!: number;
  nombreInstituto: string = '';
  tituloEstudio: string = '';
  periodoEstudio: string = '';
  urlRed: string = '';
  url_imgRed: string = '';

  constructor(private eduService: EstudioService, private router: Router) { }

  ngOnInit(): void {
  }

  onNuevaRed(): void {
    const edu = new Estudio(this.idPersona, 
                            this.nombreInstituto,
                            this.tituloEstudio, 
                            this.periodoEstudio,
                            this.urlRed, 
                            this.url_imgRed);
    this.eduService.save(edu).subscribe(data=> {
      alert("Estudios agregados!");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo agregar el estudio. Verifique datos.");
      this.router.navigate(['']);
    }
    )
  }}
