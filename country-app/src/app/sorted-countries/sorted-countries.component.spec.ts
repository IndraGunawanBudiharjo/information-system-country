import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedCountriesComponent } from './sorted-countries.component';

describe('SortedCountriesComponent', () => {
  let component: SortedCountriesComponent;
  let fixture: ComponentFixture<SortedCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
