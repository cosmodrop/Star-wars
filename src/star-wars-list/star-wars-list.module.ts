import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWarsListRoutingModule } from './star-wars-list-routing.module';
import { StarWarsListComponent } from './star-wars-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StarWarsListComponent
  ],
  imports: [
    CommonModule,
    StarWarsListRoutingModule,
    HttpClientModule
  ]
})
export class StarWarsListModule { }
