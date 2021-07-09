import { Component, OnInit } from '@angular/core';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products : any;

  constructor(private productSvc: SearchdetailsService) {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products.results
      console.log("products", this.products)
    })
  }

  ngOnInit(): void {
  }

}
