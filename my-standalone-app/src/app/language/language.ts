import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Language} from './models/language';
import {LanguageService} from '../service/language.service';


@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.html',
  styleUrl: './language.css'
})
export class LanguageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private languageService = inject(LanguageService);

  language : Language[] =[];
  countryName: string = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.queryParamMap.subscribe(params => {
      this.countryName = params.get('name') ?? '';
    });

    this.languageService.getLanguageByCountryId(id).subscribe(data => {
      this.language = data;
    });
  }

}
