import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarPieService {

  constructor() { }

  private abrirMostrarPieSubject = new Subject<boolean>; 

  abrirMostrarPie$ = this.abrirMostrarPieSubject.asObservable();

  abrirMostrarPie() {
    this.abrirMostrarPieSubject.next(true);
  }

  cerrarMostrarPie() {
    this.abrirMostrarPieSubject.next(false);
  }
   
}
