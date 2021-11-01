import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-sorted-countries',
  templateUrl: './sorted-countries.component.html',
  styleUrls: ['./sorted-countries.component.css']
})
export class SortedCountriesComponent implements OnInit {

  populatedCountries: Country[] = [];
  largestCountries: Country[] = [];
  gdpCountries: Country[] = [];

  constructor( private countryService: CountryService) { }

  ngOnInit(): void {
    this.setLargestCountries();
    this.setPopulatedCountries();
    this.setGDPCountries();
  }

  setLargestCountries(): void {
    this.largestCountries = this.countryService.getLargestCountries();

  }
  setPopulatedCountries(): void {
    this.populatedCountries = this.countryService.getPopulatedCountries();

  }
  setGDPCountries(): void {
    this.gdpCountries = this.countryService.getGDPCountries();

  }



}
