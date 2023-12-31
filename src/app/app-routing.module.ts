import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ShipsComponent } from './pages/ships/ships.component';
import { authGard } from './guard/guard.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path:'ships', 
  component: ShipsComponent, 
  canActivate: [authGard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
