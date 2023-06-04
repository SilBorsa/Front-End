import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dura } from '../modelo/dura';

@Injectable({
  providedIn: 'root'
})
export class DuraService {
  duraURL = "http://localhost:8080/hard/"
  
  constructor(private httpClient: HttpClient) { }

  public listarHard(): Observable<Dura[]> {
    return this.httpClient.get<Dura[]>(this.duraURL + 'listarHard');
  }

  public detailHard(idDura: number): Observable<Dura> {
    return this.httpClient.get<Dura>(this.duraURL + 'detailHard/${idDura}');
  }

  public saveHard(dura: Dura): Observable<any>{
    return this.httpClient.post<any>(this.duraURL + 'crearHard', dura);
  }

  public updateHard(idDura: number, dura: Dura): Observable<any>{
    return this,this.httpClient.put<any>(this.duraURL + 'editarHard/${idDura}', dura);
  }

  public deleteHard(idDura: number): Observable<any>{
    return this.httpClient.delete<any>(this.duraURL + 'borrarHard/${idDura}');
  }

}
