import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarDurasService {

  constructor() { }

  private abrirMostrarDurasSubject = new Subject<boolean>; 

  abrirMostrarDuras$ = this.abrirMostrarDurasSubject.asObservable();

  abrirMostrarDuras() {
    this.abrirMostrarDurasSubject.next(true);
  }

  cerrarMostrarDuras() {
    this.abrirMostrarDurasSubject.next(false);
  }
 
}
