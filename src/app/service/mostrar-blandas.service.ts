import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarBlandasService {

  constructor() { }

  private abrirMostrarBlandasSubject = new Subject<boolean>; 

  abrirMostrarBlandas$ = this.abrirMostrarBlandasSubject.asObservable();

  abrirMostrarBlandas() {
    this.abrirMostrarBlandasSubject.next(true);
  }

  cerrarMostrarBlandas() {
    this.abrirMostrarBlandasSubject.next(false);
  }
 
}
