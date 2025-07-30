import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Country} from '../country-list/models/country';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
 private baseUrl = 'http://localhost:8080/api/countries';
 // private environment.apiUrl = 'http://localhost:8080/api/environments';


  constructor(private http: HttpClient) {
    console.log('Hello World!');
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/${id}`);
  }
}
