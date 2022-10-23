import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsListComponent } from 'src/star-wars-list/star-wars-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../src/star-wars-list/star-wars-list.module').then((m) => m.StarWarsListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
