import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ShipsComponent } from './ships/ships.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ShipsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PagesModule { }
