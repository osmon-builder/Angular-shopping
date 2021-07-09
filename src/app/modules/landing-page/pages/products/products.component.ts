import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  public products: any;
  public search: string = '';
  
  constructor(
    private productSvc: SearchdetailsService,
    public route: ActivatedRoute,
  ) {
    this.productSvc.getProducts().subscribe(products => {
      this.products = products.results
    })
    this.search = this.route.snapshot.queryParams.q;
    this.productSvc.getSearch.subscribe(search => {
      this.productSvc.searchProduct(search).subscribe(res => {
        console.log(res)
        this.products = res.results
      })
    })
  }

  ngOnInit(): void {
  }

}
