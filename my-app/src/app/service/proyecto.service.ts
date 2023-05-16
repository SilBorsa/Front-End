import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  pyURL = "http://localhost:8080/proy/"
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.pyURL + 'listarPy');
  }

  public detail(idPy: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.pyURL + 'detail/${idPy}');
  }

  public save(Proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.pyURL + 'crearPy', Proyecto);
  }

  public update(idPy: number, Proyecto: Proyecto): Observable<any>{
    return this,this.httpClient.put<any>(this.pyURL + 'editarPy/${idPy}', Proyecto);
  }

  public delete(idPy: number): Observable<any>{
    return this.httpClient.delete<any>(this.pyURL + 'borrarPy/${idPy}');
  }

}
