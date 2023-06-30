import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blanda } from '../modelo/blanda';

@Injectable({
  providedIn: 'root'
})
export class BlandaService {
  blandaURL = "https://silborsa-backend.onrender.com/soft/"
  
  constructor(private httpClient: HttpClient) { }

  public listarSoft(): Observable<Blanda[]> {
    return this.httpClient.get<Blanda[]>(this.blandaURL + `listarSoft`);
  }

  public detailSoft(idBlanda: number): Observable<Blanda> {
    return this.httpClient.get<Blanda>(this.blandaURL + `detailSoft/${idBlanda}`);
  }

  public saveSoft(blanda: Blanda): Observable<any>{
    return this.httpClient.post<any>(this.blandaURL + `crearSoft`, blanda);
  }

  public updateSoft(idBlanda: number, blanda: Blanda): Observable<any>{
    return this,this.httpClient.put<any>(this.blandaURL + `editarSoft/${idBlanda}`, blanda);
  }

  public deleteSoft(idBlanda: number): Observable<any>{
    return this.httpClient.delete<any>(this.blandaURL + `borrarSoft/${idBlanda}`);
  }

}
