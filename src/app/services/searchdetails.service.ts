import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Product } from '../components/product/interface/product.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchdetailsService {  

  constructor(
    private http: HttpClient
  ) {

   }
  searchProduct( query = '', paging = 1){
    const filter = `${environment.baseUrlAPI}/?title=${query}&paging=${paging}`;
    return this.http.get<Product[]>(filter)
    
  }
  
  getDetails(id:number){
    return this.http.get<Product>(`${environment.baseUrlAPI}/${id}`)
  }
}
