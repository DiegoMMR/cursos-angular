import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private API_URL = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${encodeURI(query)}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${encodeURI(query)}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.API_URL}/region/${encodeURI(query)}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      )
  }

  getCountryById(id: string): Observable<Country | null> {
    const url = `${this.API_URL}/alpha/${encodeURI(id)}`
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(error => of(null))
      )
  }
}
