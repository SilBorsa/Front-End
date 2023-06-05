import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tics } from '../modelo/tics';

@Injectable({
  providedIn: 'root'
})
export class TicsService {
  ticURL = "http://localhost:8080/tic/"
  
  constructor(private httpClient: HttpClient) { }

  public listarTic(): Observable<Tics[]> {
    return this.httpClient.get<Tics[]>(this.ticURL + `listarTic`);
  }

  public detailTic(idTic: number): Observable<Tics> {
    return this.httpClient.get<Tics>(this.ticURL + `detailTic/${idTic}`);
  }

  public saveTic(tics: Tics): Observable<any>{
    return this.httpClient.post<any>(this.ticURL + `crearTic`, tics);
  }

  public updateTic(idTic: number, tics: Tics): Observable<any>{
    return this,this.httpClient.put<any>(this.ticURL + `editarTic/${idTic}`, tics);
  }

  public deleteTic(idTic: number): Observable<any>{
    return this.httpClient.delete<any>(this.ticURL + `borrarTic/${idTic}`);
  }

}
