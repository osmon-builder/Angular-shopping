import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchdetailsService {

  private subject = new ReplaySubject<string>(1)
  
  constructor(
    private http: HttpClient
  ) {

  }

  public get getSearch() {
    return this.subject.asObservable()
  }

  public sendSearch(search: string): void {
    this.subject.next(search);
  }

  getProducts() {
    const filter = `${environment.baseUrlAPI}?category=MCO1430`;
    return this.http.get<any>(filter)
  }

  searchProduct(query = '', paging = 1) {
    const filter = `${environment.baseUrlAPI}?q=${query}=${paging}`;
    return this.http.get<any>(filter)
  }

  getDetails(id: number) {
    return this.http.get<any>(`${environment.baseUrlAPI}/${id}`)
  }
}
