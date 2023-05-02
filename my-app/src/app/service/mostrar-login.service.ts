import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MostrarLoginService {

  constructor() { }

  private abrirModalLoginSubject = new Subject<boolean>; 

  abrirModalLogin$ = this.abrirModalLoginSubject.asObservable();

  abrirModalLogin() {
    this.abrirModalLoginSubject.next(true);
  }

  cerrarModalLogin() {
    this.abrirModalLoginSubject.next(false);
  }
 
}
