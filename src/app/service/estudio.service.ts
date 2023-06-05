import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../modelo/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  eduURL = "http://localhost:8080/edu/"
  
  constructor(private httpClient: HttpClient) { }

  public listarEdu(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.eduURL + `listarEdu`);
  }

  public detailEdu(idEstudio: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.eduURL + `detailEdu/${idEstudio}`);
  }

  public saveEdu(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + `crearEdu`, estudio);
  }

  public updateEdu(idEstudio: number, estudio: Estudio): Observable<any>{
    return this,this.httpClient.put<any>(this.eduURL + `editarEdu/${idEstudio}`, estudio);
  }

  public deleteEdu(idEstudio: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `borrarEdu/${idEstudio}`);
  }

}
