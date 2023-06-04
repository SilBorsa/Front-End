import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blandas } from '../modelo/Blandas';

@Injectable({
  providedIn: 'root'
})
export class BlandaService {
  blandaURL = "http://localhost:8080/soft/"
  
  constructor(private httpClient: HttpClient) { }

  public listarSoft(): Observable<Blandas[]> {
    return this.httpClient.get<Blandas[]>(this.blandaURL + 'listarSoft');
  }

  public detailSoft(idBlanda: number): Observable<Blandas> {
    return this.httpClient.get<Blandas>(this.blandaURL + 'detailSoft/${idBlanda}');
  }

  public saveSoft(Blandas: Blandas): Observable<any>{
    return this.httpClient.post<any>(this.blandaURL + 'crearSoft', Blandas);
  }

  public updateSoft(idBlanda: number, Blandas: Blandas): Observable<any>{
    return this,this.httpClient.put<any>(this.blandaURL + 'editarSoft/${idBlanda}', Blandas);
  }

  public deleteSoft(idBlanda: number): Observable<any>{
    return this.httpClient.delete<any>(this.blandaURL + 'borrarSoft/${idBlanda}');
  }

}
