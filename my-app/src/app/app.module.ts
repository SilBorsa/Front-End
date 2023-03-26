import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DetallesComponent } from './detalles/detalles.component';
import { LogosComponent } from './cuerpo/logos/logos.component';
import { CabComponent } from './cuerpo/cab/cab.component';
import { ResumenComponent } from './cuerpo/resumen/resumen.component';
import { FotoComponent } from './cuerpo/foto/foto.component';
import { LaboralComponent } from './detalles/laboral/laboral.component';
import { EstudiosComponent } from './detalles/estudios/estudios.component';
import { HabilidadesComponent } from './detalles/habilidades/habilidades.component';
import { ProyectosComponent } from './detalles/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CuerpoComponent,
    DetallesComponent,
    LogosComponent,
    CabComponent,
    ResumenComponent,
    FotoComponent,
    LaboralComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
