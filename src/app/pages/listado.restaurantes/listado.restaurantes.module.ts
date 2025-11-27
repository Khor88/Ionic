import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoRestaurantesPageRoutingModule } from './listado.restaurantes-routing.module';

import { ListadoRestaurantesPage } from './listado.restaurantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoRestaurantesPageRoutingModule
  ],
  declarations: [ListadoRestaurantesPage]
})
export class ListadoRestaurantesPageModule {}
