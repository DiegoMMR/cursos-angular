import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = []
  constructor(private countriesService: CountriesService) { }

  searchByCountry(query: string) {
    query = query.toLocaleLowerCase().trim()
    this.countriesService.searchByCountry(query)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
