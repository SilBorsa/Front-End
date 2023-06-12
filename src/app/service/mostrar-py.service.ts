import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarPyService {

  constructor() { }

  private abrirMostrarPySubject = new Subject<boolean>; 

  abrirMostrarPy$ = this.abrirMostrarPySubject.asObservable();

  abrirMostrarPy() {
    this.abrirMostrarPySubject.next(true);
  }

  cerrarMostrarPy() {
    this.abrirMostrarPySubject.next(false);
  }
 
}
