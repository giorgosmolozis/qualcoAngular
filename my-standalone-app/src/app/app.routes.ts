import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list';
import {LanguageComponent} from './language/language';

export const routes: Routes = [
  {
    path: 'country/:id',
    component: LanguageComponent
  },
  {
    path: '',
    component: CountryListComponent,
  }
];
