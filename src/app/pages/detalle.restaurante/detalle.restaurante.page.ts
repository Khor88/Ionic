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

   restaurante:restaurante={
     nombre: '', logotipo: '', tenedores: 0, comentarios: [],
     descripcion: ''
   }

   titulos:string[]=["Sobre el lugar:","Comentarios","Tenedores"]
   tituloComentarios:string="Comentarios";

  constructor(private activatedRouted: ActivatedRoute,
    private restauranteService: RestauranteService,
    private router: Router,
    private alertController: AlertController) { }

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
