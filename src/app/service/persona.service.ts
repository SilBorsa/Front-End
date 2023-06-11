import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = "http://localhost:8080/persona/";

  constructor(private http: HttpClient) { }
    
  public getPersona(idPersona: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL+ `listar`);
  }
}
