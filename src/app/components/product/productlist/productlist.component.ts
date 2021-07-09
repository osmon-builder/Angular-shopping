
import { Component, OnInit } from '@angular/core';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';
import { Product } from '../interface/product.interface';

import {take} from "rxjs/operators"
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  product: Product[] = [];

  private pageNum = 1;
  // private query: string;
  

  constructor(private productSvc: SearchdetailsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromServices();
  }

  // private getProductByQuery(): void{
  //   this.queryParams.pipe(
  //     take(1)).subscribe((params: ParamMap) =>{
  //       this.query = params['q']
  //       this.getDataFromServices();
  //     })
  //   )
  // }

  private getDataFromServices (): void{
    this.productSvc
    .searchProduct(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res:any) => {
     if( res?.results?.length){
      const {results} = res;
      this.product = [...this.product, ...results]
     }else{
       this.product = [];
     }
    })
  }
}
