import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelo/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  eduURL = "http://localhost:8080/edu/"
  
  constructor(private httpClient: HttpClient) { }

  public listarEdu(): Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.eduURL + 'listarEdu');
  }

  public detailEdu(idEstudio: number): Observable<Estudios> {
    return this.httpClient.get<Estudios>(this.eduURL + 'detailEdu/${idEstudio}');
  }

  public saveEdu(estudios: Estudios): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'crearEdu', estudios);
  }

  public updateEdu(idEstudio: number, estudios: Estudios): Observable<any>{
    return this,this.httpClient.put<any>(this.eduURL + 'editarEdu/${idEstudio}', estudios);
  }

  public deleteEdu(idEstudio: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + 'borrarEdu/${idEstudio}');
  }

}
