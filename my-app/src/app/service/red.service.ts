import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../modelo/redes';


@Injectable({
  providedIn: 'root'
})
export class RedService {
  redesURL = "http://localhost:8080/redes/"
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Redes[]> {
    return this.httpClient.get<Redes[]>(this.redesURL + 'listarRedes');
  }

  public detail(idRed: number): Observable<Redes> {
    return this.httpClient.get<Redes>(this.redesURL + 'detail/${idRed}');
  }

  public save(redes: Redes): Observable<any>{
    return this.httpClient.post<any>(this.redesURL + 'crearRed', redes);
  }

  public update(idRed: number, redes: Redes): Observable<any>{
    return this,this.httpClient.put<any>(this.redesURL + 'editarRed/${idRed}', redes);
  }

  public delete(idRed: number): Observable<any>{
    return this.httpClient.delete<any>(this.redesURL + 'borrarRed/${idRed}');
  }

}
