import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-basic-resume',
  templateUrl: './basic-resume.component.html',
  styleUrls: ['./basic-resume.component.scss'],
})
export class BasicResumeComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor() {}

  ngOnInit(): void {}

  skills: Skill[] = [{ name: 'Public Speaking' }, { name: 'Team Work' }, { name: 'Agile Methodologies' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.skills.push({ name: value });
    }
    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
}
