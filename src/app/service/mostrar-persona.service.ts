import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarPersonaService {

  constructor() { }

  private abrirMostrarPersonaSubject = new Subject<boolean>; 

  abrirMostrarPersona$ = this.abrirMostrarPersonaSubject.asObservable();

  abrirMostrarPersona() {
    this.abrirMostrarPersonaSubject.next(true);
  }

  cerrarMostrarPersona() {
    this.abrirMostrarPersonaSubject.next(false);
  }
   
}
