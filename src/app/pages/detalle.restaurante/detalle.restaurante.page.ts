import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { restaurante } from '../../interface/restaurante.modelo';

@Component({
  selector: 'app-detalle.restaurante',
  templateUrl: './detalle.restaurante.page.html',
  styleUrls: ['./detalle.restaurante.page.scss'],
  standalone:false
})
export class DetalleRestaurantePage implements OnInit {

  //Instanciamos el restaurante con el que vamos a trabajar
   restaurante:restaurante={
     nombre: '', logotipo: '', tenedores: 0, comentarios: [],
     descripcion: ''
   }

   titulos:string[]=["Sobre el lugar:","Comentarios","Tenedores"]
   tituloComentarios:string="Comentarios";
   mensajes:string[]=["No hay información sobre el lugar todavia","No hay comentarios todavía..."]

  constructor(private activatedRouted: ActivatedRoute,
    private restauranteService: RestauranteService,
    private router: Router,
    private alertController: AlertController) { }

  //En el metodo OnInit haremos que nuestro restaurante instanciado arriba se relleno con los datos del Nombre que hemos recivido
  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId:string|null = paramMap.get('restauranteNombre');
      console.log(recipeId)
      this.restaurante=this.restauranteService.getRestaurante(recipeId);
      console.log(this.restaurante);
    })
  }

  async deleteRestaurante(){

    const element = await this.alertController.create(
      {
        header: 'Seguro que quieres borrar este restaurante?',
        message: 'Warning',
        buttons:
        [
          {
            text:'Cancel',
            role: 'cancel'
          },
          {
            text: 'Delete',
            handler:() => {
              this.restauranteService.deleteRestaurante(this.restaurante.nombre)
              this.router.navigate(['/listado.restaurantes'])
            }
          }

        ]
      }
    );

    await element.present();
  }



}
