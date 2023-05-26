import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Redes } from 'src/app/modelo/redes';
import { MostrarRedesService } from 'src/app/service/mostrar-redes.service';
import { RedService } from 'src/app/service/red.service';

@Component({
  selector: 'app-editar-redes',
  templateUrl: './editar-redes.component.html',
  styleUrls: ['./editar-redes.component.css']
})

export class EditarRedesComponent implements OnInit, OnDestroy{
  filaVisible: boolean = false;
  celdaEditable: boolean = false;
  redes: Redes[] = [];

  abrirMostrarRedes=false;
  private subscription: Subscription;

  constructor(private mostrarRedesService: MostrarRedesService,
              private redService: RedService,
              //private router: Router
              ) {
      this.subscription = this.mostrarRedesService.abrirMostrarRedes$
          .subscribe(abrirMostrarRedes => {
              this.abrirMostrarRedes = abrirMostrarRedes;
          });
}

  ngOnInit(): void {
    this.redService.listarRedes()
      .subscribe(redes => this.redes = redes);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  cerrarMostrarRedes() {
    document.body.classList.remove('modal-open');
    this.mostrarRedesService.cerrarMostrarRedes();
  }

  mostrarFila(): void {
    this.filaVisible = true;
  }

  cancelarAgregar(): void {
    this.filaVisible = false;
  }

  editarCelda(): void {
    this.celdaEditable = true;
  }

  noEditar(): void {
    this.celdaEditable = false;
  }
}
