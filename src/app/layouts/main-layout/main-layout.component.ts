import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent{

 
  @HostBinding('class.navbar-opned') navbarOpned = false; 
  constructor() { }

  ngOnInit(){ }
  
  @HostListener('')

  toggleNavbar(){
    this.navbarOpned = !this.navbarOpned;
  }  
  }

