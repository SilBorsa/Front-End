import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarEduService {

  constructor() { }

  private abrirMostrarEduSubject = new Subject<boolean>; 

  abrirMostrarEdu$ = this.abrirMostrarEduSubject.asObservable();

  abrirMostrarEdu() {
    this.abrirMostrarEduSubject.next(true);
  }

  cerrarMostrarEdu() {
    this.abrirMostrarEduSubject.next(false);
  }
 
}
