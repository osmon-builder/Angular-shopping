import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';




@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent    
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
