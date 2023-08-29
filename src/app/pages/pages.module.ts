import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ShipsComponent } from './ships/ships.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ShipsComponent
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
