import { Component, OnInit } from '@angular/core';

import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile('profile').subscribe(profile => {
      this.profile = profile;
      console.log(this.profile);
    });
  }
}
