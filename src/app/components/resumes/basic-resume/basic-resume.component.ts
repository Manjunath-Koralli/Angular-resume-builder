import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ResumeinfoService } from 'src/app/shared-services/resumeinfo.service';
import { Router } from '@angular/router';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-basic-resume',
  templateUrl: './basic-resume.component.html',
  styleUrls: ['./basic-resume.component.scss'],
})
export class BasicResumeComponent implements OnInit {
  resumeForm: FormGroup;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(private formBuilder: FormBuilder, private resumeService : ResumeinfoService,private router: Router) {}

  ngOnInit(): void {
    this.resumeForm = this.formBuilder.group({
      resumeDetails: this.formBuilder.group({
        name: new FormControl(''),
        about: new FormControl(''),
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        contact: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        linkedin : new FormControl(''),
        github : new FormControl(''),
        exp : new FormControl(''),
        edu : new FormControl(''),
        org : new FormControl(''),
        language : new FormControl('')
      }),
    });
  }

  skills: Skill[] = [
    { name: 'Public Speaking' },
    { name: 'Team Work' },
    { name: 'Agile Methodologies' },
  ];
  // skills: Skill[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our skill
    if (value) {
      this.skills.push({ name: value });
    }
    // Clear the input value
    if (event.input) {
      event.input.value = '';
    }
    console.log(this.skills);
  }

  remove(skill: Skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  onSave() {
    console.log(this.skills);
    console.log(this.resumeForm.get('resumeDetails').value);
    let obj = this.resumeForm.get('resumeDetails').value;
    obj = {...obj,skills : this.skills};
    console.log(obj);
    this.resumeService.setResumeInfo(this.resumeForm.get('resumeDetails').value);
    this.resumeService.setSkills(this.skills)
    this.router.navigateByUrl(`preview/basic-resume`);
  }
}
