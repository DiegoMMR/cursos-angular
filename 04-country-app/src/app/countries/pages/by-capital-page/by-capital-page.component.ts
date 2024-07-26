import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries: Country[] = []
  constructor(private countriesService: CountriesService) { }

  searchByCapital(query: string) {
    query = query.toLocaleLowerCase().trim()
    this.countriesService.searchByCapital(query)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
