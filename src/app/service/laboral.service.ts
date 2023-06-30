import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../modelo/laboral';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {
  labURL = "https://silborsa-backend.onrender.com/lab/"
  
  constructor(private httpClient: HttpClient) { }

  public listarLab(): Observable<Laboral[]> {
    return this.httpClient.get<Laboral[]>(this.labURL + `listarLab`);
  }

  public detailLab(idLaboral: number): Observable<Laboral> {
    return this.httpClient.get<Laboral>(this.labURL + `detailLab/${idLaboral}`);
  }

  public saveLab(laboral: Laboral): Observable<any>{
    return this.httpClient.post<any>(this.labURL + `crearLab`, laboral);
  }

  public updateLab(idLaboral: number, laboral: Laboral): Observable<any>{
    return this,this.httpClient.put<any>(this.labURL + `editarLab/${idLaboral}`, laboral);
  }

  public deleteLab(idLaboral: number): Observable<any>{
    return this.httpClient.delete<any>(this.labURL + `borrarLab/${idLaboral}`);
  }

}
