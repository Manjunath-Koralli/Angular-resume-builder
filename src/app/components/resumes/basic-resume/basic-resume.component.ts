import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ViewEncapsulation } from '@angular/core';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-basic-resume',
  templateUrl: './basic-resume.component.html',
  styleUrls: ['./basic-resume.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasicResumeComponent implements OnInit {
  @ViewChild('inputwork') workDiv: ElementRef;

  faPlusCircle = faPlusCircle;
  faTrashAlt = faTrashAlt;
  resumeForm: FormGroup;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  addWorkCount = [1]; 
  addWorkBoolean : Boolean = false;
  designation = "designation";
  cname = "cname";

  addEduCount = [1];
  course = "course";
  clg_name = "clg_name";
  constructor(
    private formBuilder: FormBuilder,
    private resumeService: ResumeinfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resumeForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: new FormControl(''),
        language: new FormControl(''),
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
        linkedin: new FormControl(''),
        github: new FormControl(''),
      }),

      workExperience1: this.formBuilder.group({
        designation1: new FormControl(''),
        cname1: new FormControl(''),
      }),

      education1: this.formBuilder.group({
        course1: new FormControl(''),
        clg_name1: new FormControl(''),
      }),

      technical: this.formBuilder.group({
        technicalskills: new FormControl(''),
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

  addWork() {
    console.log('add work');
    this.addWorkBoolean = true;
    this.addWorkCount.push(this.addWorkCount.length + 1);
    console.log(this.addWorkCount); 
    for(let i = 1;i <= this.addWorkCount.length;i++) {          
      this.resumeForm.addControl(`workExperience${i}`,this.formBuilder.group({
        designation1 : new FormControl(''),
        cname1: new FormControl(''),
      }))
    }
    console.log(this.resumeForm);    
  }

  removeWork() {
    console.log('remove work');    
    this.addWorkCount.pop();
  }

  addEdu() {
    console.log('education');
    this.addEduCount.push(this.addEduCount.length + 1);
    for(let i = 1;i <= this.addEduCount.length;i++) {          
      this.resumeForm.addControl(`education${i}`,this.formBuilder.group({
        course1 : new FormControl(''),
        clg_name1 : new FormControl(''),
      }))
    }
  }

  removeEdu() {}

  onSave() {
    console.log(this.resumeForm)
    console.log(this.skills);
    console.log(this.resumeForm.get('personal').value);
    console.log(this.resumeForm.get('technical').value);
    for(let item of this.addWorkCount) {
      console.log(this.resumeForm.get(`workExperience${item}`).value);
    }

    for(let item of this.addEduCount) {
      console.log(this.resumeForm.get(`education${item}`).value);
    }
    
    
    // let obj = this.resumeForm.get('resumeDetails').value;
    // obj = {...obj,skills : this.skills};
    // console.log(obj);
    // this.resumeService.setResumeInfo(this.resumeForm.get('resumeDetails').value);
    // this.resumeService.setSkills(this.skills)
    // this.router.navigateByUrl(`preview/basic-resume`);
  }
}
