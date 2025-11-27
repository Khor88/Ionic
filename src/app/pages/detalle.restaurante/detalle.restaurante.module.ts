import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRestaurantePageRoutingModule } from './detalle.restaurante-routing.module';

import { DetalleRestaurantePage } from './detalle.restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRestaurantePageRoutingModule
  ],
  declarations: [DetalleRestaurantePage]
})
export class DetalleRestaurantePageModule {}
