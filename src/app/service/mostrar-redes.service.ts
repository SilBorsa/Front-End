import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarRedesService {

  constructor() { }

  private abrirMostrarRedesSubject = new Subject<boolean>; 

  abrirMostrarRedes$ = this.abrirMostrarRedesSubject.asObservable();

  abrirMostrarRedes() {
    this.abrirMostrarRedesSubject.next(true);
  }

  cerrarMostrarRedes() {
    this.abrirMostrarRedesSubject.next(false);
  }
 
}
