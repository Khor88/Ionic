import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoRestaurantesPage } from './listado.restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoRestaurantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoRestaurantesPageRoutingModule {}
