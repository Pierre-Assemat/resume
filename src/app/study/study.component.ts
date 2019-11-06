import { Component, Input } from '@angular/core';

import { Study } from '../models/profile';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {
  @Input()
  study: Study;

  constructor() {}
}
