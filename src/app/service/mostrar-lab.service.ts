import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarLabService {

  constructor() { }

  private abrirMostrarLabSubject = new Subject<boolean>; 

  abrirMostrarLab$ = this.abrirMostrarLabSubject.asObservable();

  abrirMostrarLab() {
    this.abrirMostrarLabSubject.next(true);
  }

  cerrarMostrarLab() {
    this.abrirMostrarLabSubject.next(false);
  }

}
