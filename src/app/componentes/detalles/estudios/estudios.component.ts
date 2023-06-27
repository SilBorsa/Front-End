import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/modelo/estudio';
import { Tics } from 'src/app/modelo/tics';
import { EstudioService } from 'src/app/service/estudio.service';
import { MostrarEduService } from 'src/app/service/mostrar-edu.service';
import { MostrarTicsService } from 'src/app/service/mostrar-tics.service';
import { TicsService } from 'src/app/service/tics.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  editSRC = "../../../../assets/editar.png";
  editALT="agregar, editar, eliminar";

  mostrarEdu=false;
  mostrarTics=false;
  isLogged=false;

  edu: Estudio[] = [{ idPersona: 1,
                      tituloEstudio:'',
                      periodoEstudio:'',
                      nombreInstituto: '',
                      urlInstituto: '',
                      url_imgInst: ''}]

  tics: Tics[] = [{ idPersona: 1,
                   cursoTic:'',
                   periodoTic:'',
                   nombreInstTic: '',
                   urlInstTic: '',
                   url_imgTic: ''}]

  agrupados: any[] = [];

  constructor (private mostrarEduService: MostrarEduService,
               private mostrarTicsService: MostrarTicsService,
               private eduService: EstudioService,
               private ticService: TicsService,
               private tokenService: TokenService) {}

  ngOnInit(): void {
  this.eduService.listarEdu()
      .subscribe(edu => this.edu = edu);
  //this.ticService.listarTic()
  //    .subscribe(tic => this.tics = tic);
  if(this.tokenService.getToken()){
     this.isLogged=true;
   } else {
     this.isLogged=false;
   }
  }

  desplazarEdu() {
    const edu = document.getElementById('formales');
    if (edu) {
      edu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarEdu() {
    document.body.classList.add('modal-open');
    this.mostrarEduService.abrirMostrarEdu();
    this.desplazarEdu();
  }

  desplazarTics() {
    const tics = document.getElementById('noformales');
    if (tics) {
      tics.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  abrirMostrarTics() {
    document.body.classList.add('modal-open');
    this.mostrarTicsService.abrirMostrarTics();
    this.desplazarTics();
  }

  agruparTicsPorInstituto(tics: Tics[]): { inst: string, url: string, img: string, tics: Tics[] }[] {
    const agrupados: { inst: string, url: string, img: string, tics: Tics[] }[] = [];
  
    tics.forEach(tic => {
      const nombreInstTic = tic.nombreInstTic;
      const existeGrupo = agrupados.find(grupo => grupo.inst === nombreInstTic);
  
      if (existeGrupo) {
        existeGrupo.tics.push(tic);
      } else {
        agrupados.push({
          inst: nombreInstTic,
          url: tic.urlInstTic,
          img: tic.url_imgTic,
          tics: [tic]
        });
      }
    });
    return agrupados;
  }
  
}
