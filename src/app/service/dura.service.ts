import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Duras } from '../modelo/duras';

@Injectable({
  providedIn: 'root'
})
export class DuraService {
  duraURL = "http://localhost:8080/hard/"
  
  constructor(private httpClient: HttpClient) { }

  public listarHard(): Observable<Duras[]> {
    return this.httpClient.get<Duras[]>(this.duraURL + 'listarHard');
  }

  public detailHard(idDura: number): Observable<Duras> {
    return this.httpClient.get<Duras>(this.duraURL + 'detailHard/${idDura}');
  }

  public saveHard(duras: Duras): Observable<any>{
    return this.httpClient.post<any>(this.duraURL + 'crearHard', duras);
  }

  public updateHard(idDura: number, duras: Duras): Observable<any>{
    return this,this.httpClient.put<any>(this.duraURL + 'editarHard/${idDura}', duras);
  }

  public deleteHard(idDura: number): Observable<any>{
    return this.httpClient.delete<any>(this.duraURL + 'borrarHard/${idDura}');
  }

}
