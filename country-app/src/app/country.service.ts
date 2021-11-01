import { Injectable } from '@angular/core';
import { Country } from './models/country';
import { COUNTRIES } from './models/mock-country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getPopulatedCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
  }
  
  getLargestCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }

  getGDPCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }

  getCountry(name: string): Country {
    return COUNTRIES.find(country => country.name === name)!;
  }


}
