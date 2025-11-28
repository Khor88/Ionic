import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { restaurante } from '../../interface/restaurante.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado.restaurantes',
  templateUrl: './listado.restaurantes.page.html',
  styleUrls: ['./listado.restaurantes.page.scss'],
  standalone:false
})
export class ListadoRestaurantesPage implements OnInit {
  title:string="Listado de restaurantes"
  restaurantes:restaurante[]=[]

  constructor(private restauranteService:RestauranteService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Metodo para refrescar cada vez que entremos y se pueda apreciar si realizamos cambios
  ionViewWillEnter(){
    this.restaurantes=this.restauranteService.getRestaurantes();
  }

  nuevoRestaurante(){
    this.router.navigate(['./restaurante-add']);
  }

}
