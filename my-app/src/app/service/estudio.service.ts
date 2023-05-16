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

  public lista(): Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.eduURL + 'listarEdu');
  }

  public detail(idEstudio: number): Observable<Estudios> {
    return this.httpClient.get<Estudios>(this.eduURL + 'detail/${idEstudio}');
  }

  public save(estudios: Estudios): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'crearEdu', estudios);
  }

  public update(idEstudio: number, estudios: Estudios): Observable<any>{
    return this,this.httpClient.put<any>(this.eduURL + 'editarEdu/${idEstudio}', estudios);
  }

  public delete(idEstudio: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + 'borrarEdu/${idEstudio}');
  }

}
