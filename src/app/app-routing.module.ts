import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'listado.restaurantes',
    pathMatch:'full',
  },
  {
    path: 'detalle.restaurante',
    loadChildren: () => import('./pages/detalle.restaurante/detalle.restaurante.module').then( m => m.DetalleRestaurantePageModule)
  },{
    path:'listado.restaurantes',        
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/listado.restaurantes/listado.restaurantes.module').then( m => m.ListadoRestaurantesPageModule)
      },
      {
        path:':restauranteNombre',
        loadChildren: () => import('./pages/detalle.restaurante/detalle.restaurante.module').then( m => m.DetalleRestaurantePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
