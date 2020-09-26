import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:"about" , component: AboutComponent},
  {path : "home", component: PortafolioComponent},
  {path:"producto/:id" , component: ProductosComponent},
  {path:"search/:search" , component: SearchComponent},
  {path: "**",pathMatch:"full", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
