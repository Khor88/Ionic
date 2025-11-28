import { Injectable } from '@angular/core';
import { restaurante } from '../interface/restaurante.modelo';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  //Listado de restaurantes sobre el que vamos a trabajar
  private restaurantes: restaurante[] = [
    {
      logotipo: "assets/imagenes/taberna-primer-tramo.jpg",
      nombre:"Taberna Primer Tramo",
      descripcion:"Taberna cofrade en Sevilla muy familiar",
      tenedores:3,
      comentarios:["Excelente trato","Comida esquisita","Volveremos seguro"]
    },
    {
      logotipo: "assets/imagenes/la-viña.jpg",
      nombre:"Bar la viña",
      descripcion:"Bar situado en Bollullos de la Mitación con trato excelente y comida casera",
      tenedores:2,
      comentarios:["Muy barato","Comida riquisima","Me tardo un poco en llegar la bebida,pero el resto genial"]
    },
    {
      logotipo: "assets/imagenes/loremip.jpg",
      nombre:"LoreMip",
      descripcion:"Restaurante italiano de gran calidad",
      tenedores:2,
      comentarios:["La pasta fabulosa","Muy barata la bebida","Camarero impertinente"]
    },
  ]

  constructor(){}

  getRestaurantes(){
    return [...this.restaurantes]
  }

  getRestaurante(restauranteNombre: string|null){
    return{
      ...this.restaurantes.find(restaurante => {
        return restaurante.nombre===restauranteNombre
      })
    }
  }

  deleteRestaurante(restauranteNombre: string|undefined){
    this.restaurantes = this.restaurantes.filter(restaurante =>{
      return restaurante.nombre !== restauranteNombre
    })
  }

  //Metodo para guardar el Restaurante en nuestro listado con los parametros aportados en la llamada
  addRestaurante(
    nombre:string,
    logotipo: string
) {
    this.restaurantes.push({
      nombre:nombre,
      logotipo:logotipo,
    })
  }


}
