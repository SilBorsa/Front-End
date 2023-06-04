
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy { 
    isLogged = false;
    isLogginFail = false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errMsj!: string;

    abrirModalLogin=false;
    private subscription: Subscription;

    constructor(private mostrarLoginService: MostrarLoginService,
                private tokenService: TokenService,
                private authService: AuthService) {   //,
                //private router: Router) {
        this.subscription = this.mostrarLoginService.abrirModalLogin$.subscribe(abrirModalLogin => {
            this.abrirModalLogin = abrirModalLogin;
          });
    }

    ngOnInit(): void {
        // para el login
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLogginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    miEnter() {
        this.onLogin();
        this.cerrarModalLogin();
    }

    cerrarModalLogin(){
        document.body.classList.remove('modal-open');
        this.mostrarLoginService.cerrarModalLogin();
    }

    ngOnDestroy(): void {
         this.subscription.unsubscribe();
    }

    onLogin(): void {
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
        this.authService.login(this.loginUsuario).subscribe(data => {
            this.isLogged = true;
            this.isLogginFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles = data.authorities;
            //this.router.navigate(['']);
            window.location.reload();
        }, err => {
            this.isLogged = false;
            this.isLogginFail = true;
            this.errMsj = err.error.mensaje;
            console.log(this.errMsj);
        })
    }
}

