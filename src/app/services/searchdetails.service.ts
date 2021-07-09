import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SearchdetailsService {

  constructor(
    private http: HttpClient
  ) {

  }

  getProducts() {
    const filter = `${environment.baseUrlAPI}`;
    return this.http.get<any>(filter)
  }

  searchProduct(query = '', paging = 1) {
    const filter = `${environment.baseUrlAPI}/?title=${query}&paging=${paging}`;
    return this.http.get<any>(filter)
  }

  getDetails(id: number) {
    return this.http.get<any>(`${environment.baseUrlAPI}/${id}`)
  }
}
