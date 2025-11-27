import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { restaurante } from '../../interface/restaurante.modelo';

@Component({
  selector: 'app-listado.restaurantes',
  templateUrl: './listado.restaurantes.page.html',
  styleUrls: ['./listado.restaurantes.page.scss'],
  standalone:false
})
export class ListadoRestaurantesPage implements OnInit {
  title:string="Listado de restaurantes"
  restaurantes:restaurante[]=[]

  constructor(private restauranteService:RestauranteService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.restaurantes=this.restauranteService.getRestaurantes();
  }


}
