import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { interceptorProvider } from './service/interceptor-service.service';

import { AppComponent } from './app.component';

import { SuperiorComponent } from './componentes/superior/superior.component';
import { CabComponent } from './componentes/superior/cab/cab.component';
import { EditarRedesComponent } from './componentes/superior/cab/editar-redes.component';
import { LogosComponent } from './componentes/superior/logos/logos.component';
import { ResumenComponent } from './componentes/superior/resumen/resumen.component';
import { FotoComponent } from './componentes/superior/foto/foto.component';

import { DetallesComponent } from './componentes/detalles/detalles.component';
import { LaboralComponent } from './componentes/detalles/laboral/laboral.component';
import { EstudiosComponent } from './componentes/detalles/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/detalles/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/detalles/proyectos/proyectos.component';
import { FotosajustesComponent } from './componentes/detalles/proyectos/fotosajustes/fotosajustes.component';

import { PieComponent } from './componentes/pie/pie.component';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeEditComponent } from './componentes/home/home-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    CabComponent,
    EditarRedesComponent,
    LogosComponent,
    ResumenComponent,
    FotoComponent,

    DetallesComponent,
    LaboralComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FotosajustesComponent,
    
    PieComponent,

    HomeComponent,
    HomeEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    EmojiModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
