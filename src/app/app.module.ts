import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromSearchComponent } from './modules/landing-page/components/from-search/from-search.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
    FromSearchComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainLayoutModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
