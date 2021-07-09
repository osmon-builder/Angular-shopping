import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { ProductdetailsComponent } from './components/product/productdetails/productdetails.component';
import { HeaderComponent } from './components/header/header.component';
import { FromSearchComponent } from './components/from-search/from-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,   
    BestsellerComponent,
    FooterComponent,   
    HeaderComponent,
    FromSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
