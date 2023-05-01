import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { PieComponent } from './componentes/pie/pie.component';
import { SuperiorComponent } from './componentes/superior/superior.component';
import { LogosComponent } from './componentes/superior/logos/logos.component';
import { CabComponent } from './componentes/superior/cab/cab.component';
import { LoginComponent } from './componentes/login/login.component';
import { ResumenComponent } from './componentes/superior/resumen/resumen.component';
import { FotoComponent } from './componentes/superior/foto/foto.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { LaboralComponent } from './componentes/detalles/laboral/laboral.component';
import { EstudiosComponent } from './componentes/detalles/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/detalles/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/detalles/proyectos/proyectos.component';
import { FotosajustesComponent } from './componentes/detalles/proyectos/fotosajustes/fotosajustes.component';
import { HomeComponent } from './componentes/home/home.component';
import { AlbumComponent } from './componentes/detalles/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    SuperiorComponent,
    DetallesComponent,
    LogosComponent,
    CabComponent,
    ResumenComponent,
    FotoComponent,
    LaboralComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FotosajustesComponent,
    HomeComponent,
    LoginComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    EmojiModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
