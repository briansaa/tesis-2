import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'; 
import { RastrearComponent } from './rastrear/rastrear.component';
import { PagaloComponent } from './pagalo/pagalo.component';
import { AgenciasComponent } from './agencias/agencias.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { AgenciaDetalleComponent } from './agencia-detalle/agencia-detalle.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rastrear', component: RastrearComponent },
  { path: 'pagalo', component: PagaloComponent },
  { path: 'agencias', component: AgenciasComponent },
  { path: 'agencia-detalle/:id', component: AgenciaDetalleComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección predeterminada
  { path: '**', redirectTo: '/home' } // Ruta para manejar 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
