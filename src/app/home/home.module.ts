import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';

import { ProductModule } from '../components/product/product.module';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [ CommonModule,HomeRoutingModule, ProductModule],
})
export class HomeModule {}