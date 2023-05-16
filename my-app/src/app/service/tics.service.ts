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

  public lista(): Observable<Tics[]> {
    return this.httpClient.get<Tics[]>(this.ticURL + 'listarTic');
  }

  public detail(idTic: number): Observable<Tics> {
    return this.httpClient.get<Tics>(this.ticURL + 'detail/${idTic}');
  }

  public save(tics: Tics): Observable<any>{
    return this.httpClient.post<any>(this.ticURL + 'crearTic', tics);
  }

  public update(idTic: number, tics: Tics): Observable<any>{
    return this,this.httpClient.put<any>(this.ticURL + 'editarTic/${idTic}', tics);
  }

  public delete(idTic: number): Observable<any>{
    return this.httpClient.delete<any>(this.ticURL + 'borrarTic/${idTic}');
  }

}
