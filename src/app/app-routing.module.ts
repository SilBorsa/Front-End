import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
//import { HomeEditComponent } from './componentes/home/home-edit.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  //{ path:'home-edit', component: HomeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
