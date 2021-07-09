import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSearchComponent } from './from-search.component';

describe('FromSearchComponent', () => {
  let component: FromSearchComponent;
  let fixture: ComponentFixture<FromSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
