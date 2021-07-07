import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchdetailsService {
  _url = 'https://api.mercadolibre.com/sites/MCO/search?q=Motorola%20G6'

  constructor(
    private http: HttpClient
  ) {

   }
  getProduct(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')
  
  return this.http.get(this._url,{headers:header})
  }
}
