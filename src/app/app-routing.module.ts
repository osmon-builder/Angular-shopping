import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    loadChildren: () => 
      import('./home/home.component').then((m) => m.HomeComponent)
  },
  {
    path:'productlist/:id',
    loadChildren: () => 
      import('./components/product/productlist/productlist.component').then((m) => m.ProductlistComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
