import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-from-search',
  templateUrl: './from-search.component.html',
  styleUrls: ['./from-search.component.scss']
})
export class FromSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string){
    if(value && value.length > 3 ){
      this.router.navigate(['/productlist'], {
        queryParams:{ q: value }
      })
    }
  }

}
