import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ShipsComponent } from './ships/ships.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarshipCardComponent } from './starship-card/starship-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ShipsComponent,
    StarshipCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PagesModule { }
