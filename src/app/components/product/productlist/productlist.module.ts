  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductListRoutingModule } from './productlist.router.module';
import { HomeComponent } from 'src/app/home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductListRoutingModule],
})
export class ProductListModule {}