import { Component, Input } from '@angular/core';

import { WorkExperience } from '../models/profile';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  @Input()
  experience: WorkExperience;

  constructor() {}
}
