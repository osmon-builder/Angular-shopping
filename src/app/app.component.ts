import { Component } from '@angular/core';
import { SearchdetailsService } from './services/searchdetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shping-app';
  public product: Array<any>=[]
  constructor(
    private searchServices: SearchdetailsService
  ){

    this.searchServices.getProduct().subscribe((resp: any) => {
      console.log(resp)
      this.product = resp
    })

  }
}
