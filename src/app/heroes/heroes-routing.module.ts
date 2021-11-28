import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {

  path:'',
  component: HomeComponent,
  children:[  //todas estas rutas hijas se van a desplegar en el compnent asignado en este caso Home component

    {
      path:'listado',
      component: ListadoComponent
    },
    {
      path:'agregar',
      component:AgregarComponent
    },
    {
      path:'editar/:id',
      component:AgregarComponent
    },
    {
      path:'buscar',
      component:BuscarComponent
    },
    {
      path:':id',
      component:HeroeComponent
    },
    {
      path:':id',
      component:HeroeComponent
    },
    {
      path:'**',
      redirectTo:'listado'
    }

  ]

  }
  

]



@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
