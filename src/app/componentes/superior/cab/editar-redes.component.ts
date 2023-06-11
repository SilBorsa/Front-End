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
  idRed?: number; 
  idPersona: number = 1;
  nombreRed: string = '';
  urlRed: string = '';
  url_imgRed: string = '';
  redes: Redes[] = [];

  filaVisible: boolean = false; /* asociado a la creacion de registros */
  redCreada: Redes = new Redes(1,"","","");
  filaEditable: boolean = false; /* asociado a la edicion de regsitros */
  redEditada: Redes = new Redes(1,"","","");

  errMsj!: string;

  abrirMostrarRedes=false;
  private subscription: Subscription;

  constructor(private mostrarRedesService: MostrarRedesService,
              private redService: RedService,
              //private router: Router
              ) {
      this.subscription = this.mostrarRedesService.abrirMostrarRedes$
          .subscribe(abrirMostrarRedes => { this.abrirMostrarRedes = abrirMostrarRedes; });
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

  /* muestra el formulario de carga */
  mostrarFila(): void {
    this.filaVisible = true;
  }

  /* oculta el formulario de carga */
  cancelarAgregar(): void {
    this.filaVisible = false;
  }

  /* guarda los cambios del registro modificado */
  actualizarFila() {
    if (this.redEditada && this.redEditada.idRed) {
      this.redService.updateRed(this.redEditada.idRed, this.redEditada)
        .subscribe(response => {
          this.redService.listarRedes().subscribe(redes => this.redes = redes);
          alert(`Se actualizaron los datos de ${this.redEditada.nombreRed}.`);
          this.filaEditable = false;
        }, error => {
        alert(`Los datos no pudieron modificarse. Si intento cambiar el nombre de la red, verifique si ya no esta cargada.`);
      });
    }
  }

  /* oculta campos de edicion para el registro seleccionado */
  noEditar(): void {
    this.filaEditable = false;
  }

  /* muestra campos de edicion para el registro seleccionado */
  editarFila(red: Redes) {
    this.filaEditable = true;
    this.redEditada = {...red};
  }
  
  /* elimina el registro seleccionado */
  borrarRed(idRed?: number) {
    if(idRed!==undefined){
      const confirmarEliminacion = confirm(`¿Seguro que quieres eliminar la red #${idRed}?`);
      if(confirmarEliminacion) {
        this.redService.deleteRed(idRed)
          .subscribe(data => {
            alert('Se ha eliminado la red');
            this.redService.listarRedes().subscribe(redes => this.redes = redes);
          }, error => {
            alert('No pudo eliminarse la red');
          });
      } else {
        alert('Eliminacion cancelada por el usuario');
      }
    }
  }

  /* guarda el registro creado */
  guardarRed(red: Redes) {
    const miRed = new Redes(this.redCreada.idPersona,
                            this.redCreada.nombreRed,
                            this.redCreada.urlRed,
                            this.redCreada.url_imgRed)
    this.redService.saveRed(miRed)
    .subscribe(() => {
      alert(`Se ha agregado ${this.redCreada.nombreRed}`);
      this.redService.listarRedes().subscribe(redes => this.redes = redes);
      this.redCreada.nombreRed='';
      this.redCreada.urlRed='';
      this.redCreada.url_imgRed='';
      this.filaVisible = false;
    }, error => {
      alert('No pudo agregarse la red, es probable que ya exista. Verifique los datos y vuelva a intentarlo');
    });
  }
}
