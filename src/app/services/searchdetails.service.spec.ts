import { TestBed } from '@angular/core/testing';

import { SearchdetailsService } from './searchdetails.service';

describe('SearchdetailsService', () => {
  let service: SearchdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
