import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingPath } from 'src/app/configs/routing-path';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
      path: "",
      pathMatch: "prefix",
      canActivate: [],
      children: [
          {
              path: RoutingPath.appRouting.components.landing_page.pages.home.path,
              component: HomeComponent
          },
          {
            path: RoutingPath.appRouting.components.landing_page.pages.products.path,
            component: ProductsComponent
        },
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
