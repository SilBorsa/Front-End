import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelo/jwt-dto';
import { LoginUsuario } from '../modelo/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "https://silborsa-backend.onrender.com/auth/";

  constructor(private httpCliente: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpCliente.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
