import { Component, OnInit, Input } from '@angular/core';

import { Skill } from '../models/profile';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input()
  skill: Skill;

  stars: number[];

  starsMissing: number[];

  constructor() {}

  ngOnInit() {
    this.stars = Array(this.skill.level);
    this.starsMissing = Array(this.skill.levelMax - this.skill.level);

    // TODO: Improve by taking decimal number into account (star_half icon)
  }
}
