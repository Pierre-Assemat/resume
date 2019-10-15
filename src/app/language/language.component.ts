import { Component, OnInit, Input } from '@angular/core';

import { Language } from '../models/profile';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input()
  language: Language;

  constructor() {}

  ngOnInit() {}
}
