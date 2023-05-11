import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../modelo/laboral';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {
  expURL = "http://localhost:8080/expLab"
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Laboral[]> {
    return this.httpClient.get<Laboral[]>(this.expURL + 'listarLab');
  }

  public detail(idLaboral: number): Observable<Laboral> {
    return this.httpClient.get<Laboral>(this.expURL + 'detail/${idLaboral}');
  }

  public save(laboral: Laboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'crearLab', laboral);
  }

  public update(idLaboral: number, laboral: Laboral): Observable<any>{
    return this,this.httpClient.put<any>(this.expURL + 'editar/${idLaboral}', laboral);
  }

  public delete(idLaboral: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'borrar/${idLaboral}');
  }

}
