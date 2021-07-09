import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchdetailsService } from 'src/app/services/searchdetails.service';


@Component({
  selector: 'app-from-search',
  templateUrl: './from-search.component.html',
  styleUrls: ['./from-search.component.scss']
})
export class FromSearchComponent implements OnInit {

  constructor(private router: Router,
    private productSvc: SearchdetailsService) { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/landing-page/products'], {
        queryParams: { q: value }
      })
      this.productSvc.sendSearch(value);
    }
  }

}
