import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { MostrarLoginService } from 'src/app/service/mostrar-login.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    isLogged = false;
    isLogginFail = false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    pswUsuario!: string;
    roles: string[] = [];
    errMsj!: string;

    @Input() id?: string;
    isOpen = false;
    private element: any;

    constructor(private mostrarLoginService: MostrarLoginService,
                private el: ElementRef,
                private tokenService: TokenService,
                private authService: AuthService,
                private router: Router) {
        this.element = el.nativeElement;
    }

    ngOnInit() {
    
        // para el login
        if (this.tokenService.getToken()) {
            this.isLogged = true;
            this.isLogginFail = false;
            this.roles = this.tokenService.getAuthorities();
        }
    }

    open() {
        this.element.style.display = 'block';
        //document.body.classList.add('popup-open');
        this.isOpen = true;
    }

    close() {
        this.element.style.display = 'none';
        //document.body.classList.remove('popup-open');
        this.isOpen = false;
    }

    onLogin(): void {
        this.loginUsuario = new LoginUsuario(this.nombreUsuario,
            this.pswUsuario);
        this.authService.login(this.loginUsuario).subscribe(data => {
            this.isLogged = true;
            this.isLogginFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles = data.authorities;
            this.router.navigate(['']);
        }, err => {
            this.isLogged = false;
            this.isLogginFail = true;
            this.errMsj = err.error.mensaje;
            console.log(this.errMsj);
        })
    }

}

