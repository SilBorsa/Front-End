import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MostrarRedesService } from 'src/app/service/mostrar-redes.service';

@Component({
  selector: 'app-editar-redes',
  templateUrl: './editar-redes.component.html',
  styleUrls: ['./editar-redes.component.css']
})

export class EditarRedesComponent implements OnInit, OnDestroy{

  abrirMostrarRedes=false;
  private subscription: Subscription;

  constructor(private mostrarRedesService: MostrarRedesService,
              //private router: Router
              ) {
      this.subscription = this.mostrarRedesService.abrirMostrarRedes$.subscribe(abrirMostrarRedes => {
        this.abrirMostrarRedes = abrirMostrarRedes;
});
}

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarRedes(){
    document.body.classList.remove('modal-open');
    this.mostrarRedesService.cerrarMostrarRedes();
  }
}
