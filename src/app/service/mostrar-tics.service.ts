import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarTicsService {

  constructor() { }

  private abrirMostrarTicsSubject = new Subject<boolean>; 

  abrirMostrarTics$ = this.abrirMostrarTicsSubject.asObservable();

  abrirMostrarTics() {
    this.abrirMostrarTicsSubject.next(true);
  }

  cerrarMostrarTics() {
    this.abrirMostrarTicsSubject.next(false);
  }
 
}
