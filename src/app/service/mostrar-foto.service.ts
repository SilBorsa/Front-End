import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarFotoService {

  constructor() { }

  private abrirMostrarFotoSubject = new Subject<boolean>; 

  abrirMostrarFoto$ = this.abrirMostrarFotoSubject.asObservable();

  abrirMostrarFoto() {
    this.abrirMostrarFotoSubject.next(true);
  }

  cerrarMostrarFoto() {
    this.abrirMostrarFotoSubject.next(false);
  }
   
}
