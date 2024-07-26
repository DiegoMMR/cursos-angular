import { Component } from '@angular/core';
import { CountriesService } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries: Country[] = []
  constructor(private countriesService: CountriesService) { }

  searchByRegion(query: string) {
    query = query.toLocaleLowerCase().trim()
    this.countriesService.searchByRegion(query)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
