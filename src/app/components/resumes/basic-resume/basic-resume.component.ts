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
import {
  faPlusCircle,
  faTrashAlt,
  faSlash,
} from '@fortawesome/free-solid-svg-icons';
import { ViewEncapsulation } from '@angular/core';
import { FormValidators } from 'src/app/validators/form-validators';

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
  faSlash = faSlash;
  resumeForm: FormGroup;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  addWorkCount = ['workExperience1'];
  addWorkBoolean: Boolean = false;
  designation = 'designation';
  cname = 'cname';

  addEduCount = ['education1'];
  course = 'course';
  clg_name = 'clg_name';
  constructor(
    private formBuilder: FormBuilder,
    private resumeService: ResumeinfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.addWorkCount.length == 1) {
      this.disableButton('workDel');
    }

    if (this.addEduCount.length == 1) {
      this.disableButton('workEdu');
    }

    this.resumeForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        language: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        about: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        contact: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{10}'),
        ]),
        linkedin: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        github: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        skill: new FormControl('', [Validators.required]),
      }),

      workExperience1: this.formBuilder.group({
        designation1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        cname1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        fromDate1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
          FormValidators.dateValidation,
          FormValidators.monthValidation,
        ]),
        toDate1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
          FormValidators.dateValidation,
          FormValidators.monthValidation
        ]),
        tasks1: new FormControl(''),
      }),

      education1: this.formBuilder.group({
        course1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        clg_name1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
        fromDate1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
          FormValidators.dateValidation,
        ]),
        toDate1: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
          FormValidators.dateValidation,
        ]),
      }),

      technical: this.formBuilder.group({
        technicalskills: new FormControl('', [
          Validators.required,
          FormValidators.notOnlyWhitespace,
        ]),
      }),
    });
  }

  skills: Skill[] = [{ name: 'Team Work' }];

  get name() {
    return this.resumeForm.get('personal.name');
  }
  get language() {
    return this.resumeForm.get('personal.language');
  }
  get email() {
    return this.resumeForm.get('personal.email');
  }
  get contact() {
    return this.resumeForm.get('personal.contact');
  }
  get linkedin() {
    return this.resumeForm.get('personal.linkedin');
  }
  get github() {
    return this.resumeForm.get('personal.github');
  }
  get skill() {
    return this.resumeForm.get('personal.skill');
  }
  
  get fromDate1() {  
    return this.resumeForm.get('workExperience1.fromDate1');
  }
  get toDate1(){ 
    return this.resumeForm.get('workExperience1.toDate1');
  }

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

  enableButton(delClass) {
    let icon = document.querySelector(`.${delClass}`);
    icon.classList.remove('disabled-button');
  }

  disableButton(delClass) {
    let icon = document.querySelector(`.${delClass}`);
    icon.classList.add('disabled-button');
  }

  addWork() {
    console.log('add work');
    this.enableButton('workDel');
    this.addWorkBoolean = true;
    this.addWorkCount.push(`workExperience${this.addWorkCount.length + 1}`);
    // console.log(this.addWorkCount);
    for (let i = 1; i <= this.addWorkCount.length; i++) {
      this.resumeForm.addControl(
        `workExperience${i}`,
        this.formBuilder.group({
          designation1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          cname1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          fromDate1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
            FormValidators.dateValidation,
          ]),
          toDate1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
            FormValidators.dateValidation,
          ]),
          tasks1: new FormControl(''),
        })
      );
    }
    console.log(this.resumeForm);
  }

  removeWork() {
    console.log('remove work');
    this.addWorkCount.pop();
    if (this.addWorkCount.length == 1) {
      this.disableButton('workDel');
      return;
    }
  }

  addEdu() {
    console.log('education');
    this.enableButton('workEdu');
    this.addEduCount.push(`education${this.addEduCount.length + 1}`);
    for (let i = 1; i <= this.addEduCount.length; i++) {
      this.resumeForm.addControl(
        `education${i}`,
        this.formBuilder.group({
          course1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          clg_name1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          fromDate1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
            FormValidators.dateValidation,
          ]),
          toDate1: new FormControl('', [
            Validators.required,
            FormValidators.notOnlyWhitespace,
            FormValidators.dateValidation,
          ]),
        })
      );
    }
  }

  removeEdu() {
    this.addEduCount.pop();
    if (this.addEduCount.length == 1) {
      this.disableButton('workEdu');
      return;
    }
  }

  onSave() {
    // console.log(this.skills);
    // console.log(this.resumeForm.get('personal').value);
    // console.log(this.resumeForm.get('technical').value);

    if (this.resumeForm.invalid) {
      // markAllAsTouched - triggers display of error messages
      this.resumeForm.markAllAsTouched();
      return;
    }

    if (this.skills.length == 0) {
      return;
    }

    let resumeDetails = this.resumeForm.get('personal').value;
    let techSkills = this.resumeForm.get('technical').value;
    resumeDetails = {
      ...resumeDetails,
      skills: this.skills,
      techSkills: techSkills,
    };

    let workExp = {};
    for (let item of this.addWorkCount) {
      // console.log(this.resumeForm.get(`${item}`).value);
      workExp[`${item}`] = this.resumeForm.get(`${item}`).value;
      resumeDetails = { ...resumeDetails, workExp };
    }

    let edu = {};
    for (let item of this.addEduCount) {
      // console.log(this.resumeForm.get(`education${item}`).value);
      edu[`${item}`] = this.resumeForm.get(`${item}`).value;
      resumeDetails = { ...resumeDetails, edu };
    }

    console.log(resumeDetails);

    // this.resumeService.setResumeInfo(resumeDetails);
    // this.resumeService.setSkills(this.skills)
    // this.router.navigateByUrl(`preview/basic-resume`);
  }
}
