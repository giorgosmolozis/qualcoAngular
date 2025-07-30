import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../language/models/language';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  //private baseUrl = 'http://localhost:8080/api/countries';

  private baseUrl = `${environment.apiUrl}/countries`;

  constructor(private http: HttpClient) {
    console.log('Hello World!');
  }

  // getLanguageByCountryId(id: number): Observable<Language[]> {
  //   return this.http.get<Language[]>(`${this.baseUrl}/1`);
  // }

  getLanguageByCountryId(id: number): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.baseUrl}/${id}`);
  }

}
