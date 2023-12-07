import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { NuevoProyectoComponent } from './components/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'verificar-correo', component: VerificarCorreoComponent},
  {path: 'recuperar-password', component: RecuperarPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'mis-proyectos', component: MisProyectosComponent},
  {path: 'nuevo-proyecto', component: NuevoProyectoComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
