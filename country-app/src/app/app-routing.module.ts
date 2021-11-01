import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { SortedCountriesComponent } from './sorted-countries/sorted-countries.component';

const routes: Routes = [
  { path: '', redirectTo: '/sorted-countries', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent},
  { path: 'detail/:name', component: CountryDetailComponent},
  { path: 'all-countries', component: AllCountriesComponent},
  { path: 'sorted-countries', component: SortedCountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
