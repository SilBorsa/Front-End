import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { MostrarLoginService } from 'src/app/service/mostrar-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy{

  @Input() id?: string;
  isOpen = false;
  private element: any;

  constructor(private mostrarLoginService: MostrarLoginService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit() {
      // agrega el servicio para abrir cualquier componente emergente desde cualquier otro
      this.mostrarLoginService.add(this);

      // uh esto me parece una cagada
      document.body.appendChild(this.element);

      // cierra el emergente
      this.element.addEventListener('click', (el: any) => {
          if (el.target.className === 'popup') {
              this.close();
          }
      });
  }

  ngOnDestroy() {
      // quita el componente del servicio
      this.mostrarLoginService.remove(this);

      // quita el componente del html
      this.element.remove();
  }

  open() {
      this.element.style.display = 'block';
      document.body.classList.add('popup-open');
      this.isOpen = true;
  }

  close() {
      this.element.style.display = 'none';
      document.body.classList.remove('popup-open');
      this.isOpen = false;
  }

}

