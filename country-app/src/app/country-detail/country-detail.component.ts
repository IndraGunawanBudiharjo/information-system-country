import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/country';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country?: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const name: string = this.route.snapshot.paramMap.get('name')!;
    this.country = this.countryService.getCountry(name);
  }

  goBack(): void {
    this.location.back();
  }


}
