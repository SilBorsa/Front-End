import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = "https://silborsa-backend.onrender.com/persona/";

  constructor(private httpClient: HttpClient) { }
    
  public listar(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + `listar`);
  }

  //public listar(): Observable<Persona> {
  //  return this.httpClient.get<Persona>(this.URL + `listar`);
  //}

  public detail(idPersona: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${idPersona}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + `crear`, persona);
  }

  public update(idPersona: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${idPersona}`, persona);
  }

  public delete(idPersona: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${idPersona}`);
  }

}
