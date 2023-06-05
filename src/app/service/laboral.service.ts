import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../modelo/laboral';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {
  expURL = "http://localhost:8080/lab/"
  
  constructor(private httpClient: HttpClient) { }

  public listarLab(): Observable<Laboral[]> {
    return this.httpClient.get<Laboral[]>(this.expURL + `listarLab`);
  }

  public detailLab(idLaboral: number): Observable<Laboral> {
    return this.httpClient.get<Laboral>(this.expURL + `detailLab/${idLaboral}`);
  }

  public saveLab(laboral: Laboral): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `crearLab`, laboral);
  }

  public updateLab(idLaboral: number, laboral: Laboral): Observable<any>{
    return this,this.httpClient.put<any>(this.expURL + `editar/${idLaboral}`, laboral);
  }

  public deleteLab(idLaboral: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `borrar/${idLaboral}`);
  }

}
