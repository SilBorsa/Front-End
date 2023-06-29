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
import { EditarPersonaComponent } from './componentes/superior/resumen/editar-persona.component';
import { FotoComponent } from './componentes/superior/foto/foto.component';
import { EditarFotoComponent } from './componentes/superior/foto/editar-foto.component';

import { DetallesComponent } from './componentes/detalles/detalles.component';
import { LaboralComponent } from './componentes/detalles/laboral/laboral.component';
import { EditarLabComponent } from './componentes/detalles/laboral/editar-lab.component';
import { EstudiosComponent } from './componentes/detalles/estudios/estudios.component';
import { EditarEduComponent } from './componentes/detalles/estudios/editar-edu.component';
import { EditarTicsComponent } from './componentes/detalles/estudios/editar-tics.component';
import { HabilidadesComponent } from './componentes/detalles/habilidades/habilidades.component';
import { EditarDurasComponent } from './componentes/detalles/habilidades/editar-duras.component';
import { EditarBlandasComponent } from './componentes/detalles/habilidades/editar-blandas.component';
import { ProyectosComponent } from './componentes/detalles/proyectos/proyectos.component';
import { EditarPyComponent } from './componentes/detalles/proyectos/editar-py.component';
import { FotosajustesComponent } from './componentes/detalles/proyectos/fotosajustes/fotosajustes.component';

import { PieComponent } from './componentes/pie/pie.component';
import { EditarPieComponent } from './componentes/pie/editar-pie.component';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { AlertaEdicionComponent } from './componentes/alerta-edicion/alerta-edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperiorComponent,
    CabComponent,
    EditarRedesComponent,
    LogosComponent,
    ResumenComponent,
    EditarPersonaComponent,
    FotoComponent,
    EditarFotoComponent,

    DetallesComponent,
    LaboralComponent,
    EditarLabComponent,
    EstudiosComponent,
    EditarEduComponent,
    EditarTicsComponent,
    HabilidadesComponent,
    EditarDurasComponent,
    EditarBlandasComponent,
    ProyectosComponent,
    EditarPyComponent,
    FotosajustesComponent,
    
    PieComponent,
    EditarPieComponent,

    HomeComponent,
    LoginComponent,
    AlertaEdicionComponent
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
