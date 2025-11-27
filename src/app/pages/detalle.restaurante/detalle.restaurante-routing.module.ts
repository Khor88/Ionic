import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRestaurantePage } from './detalle.restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRestaurantePageRoutingModule {}
