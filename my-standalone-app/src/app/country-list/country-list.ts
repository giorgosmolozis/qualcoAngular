import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../service/country.service';
import {Country} from './models/country';
import {RouterLink, Routes} from '@angular/router';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryListComponent implements OnInit {
  private countryService = inject(CountryService);
  countries: Country[] = [];

  sortedCountries: Country[] = [];

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
      this.sortedCountries = [...data].sort((a, b) => a.name.localeCompare(b.name));
    });
 }

}
