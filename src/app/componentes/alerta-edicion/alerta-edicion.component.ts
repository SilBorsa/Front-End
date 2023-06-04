import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-alerta-edicion',
  templateUrl: './alerta-edicion.component.html',
  styleUrls: ['./alerta-edicion.component.css']
})
export class AlertaEdicionComponent implements OnInit {
  isLogged = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }
}
