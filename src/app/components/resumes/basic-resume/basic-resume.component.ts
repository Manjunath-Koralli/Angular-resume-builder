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
  workExp; 

  addEduCount = ['education1'];
  education;

  lstorage : Storage = localStorage;
  resumeDetails: any;
  edit : boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private resumeService: ResumeinfoService,
    private router: Router
  ) {}

  skills: Skill[] = [{ name: 'Team Work' }];
  ngOnInit(): void {
    if (this.addWorkCount.length == 1) {
      this.disableButton('workDel');
    }

    if (this.addEduCount.length == 1) {
      this.disableButton('workEdu');
    }
    this.resumeDetails = JSON.parse(this.lstorage.getItem('resumeDetails'));
    this.edit = this.resumeService.getEdit();
    if(this.edit) {
      this.skills = [];
      // console.log(this.resumeDetails.skills)
      for(let skill of this.resumeDetails.skills) {
        this.skills.push(skill);
      }
      this.resumeForm = this.formBuilder.group({
        personal: this.formBuilder.group({
          name: new FormControl(this.resumeDetails.name, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          language: new FormControl(this.resumeDetails.language, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          about: new FormControl(this.resumeDetails.about, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          email: new FormControl(this.resumeDetails.email, [
            Validators.required,
            // Validators.minLength(2),
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]),
          contact: new FormControl(this.resumeDetails.contact, [
            Validators.required,
            Validators.pattern('[0-9]{10}'),
          ]),
          linkedin: new FormControl(this.resumeDetails.linkedin, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          github: new FormControl(this.resumeDetails.github, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
          skill: new FormControl(''),
        }),
  
        technical: this.formBuilder.group({
          technicalskills: new FormControl(this.resumeDetails.techSkills.technicalskills, [
            Validators.required,
            FormValidators.notOnlyWhitespace,
          ]),
        })
      });

      this.addWorkCount = [];
      this.workExp = Object.values(this.resumeDetails.workExp);
      console.log(this.workExp[0].designation1)
      for (let i = 1; i <= this.workExp.length; i++) {
        this.addWorkCount.push(`workExperience${i}`);
        this.resumeForm.addControl(
          `workExperience${i}`,
          this.formBuilder.group({
            designation1: new FormControl(this.workExp[i-1].designation1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
            ]),
            cname1: new FormControl(this.workExp[i-1].cname1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
            ]),
            fromDate1: new FormControl(this.workExp[i-1].fromDate1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
              FormValidators.dateValidation,
            ]),
            toDate1: new FormControl(this.workExp[i-1].toDate1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
              FormValidators.dateValidation,
            ]),
            tasks1: new FormControl(this.workExp[i-1].tasks1),
          })
        );
      }

      this.addEduCount = [];
      this.education = Object.values(this.resumeDetails.edu);
      console.log(this.education[0].course1)
      for (let i = 1; i <= this.education.length; i++) {
        this.addEduCount.push(`education${i}`);
        this.resumeForm.addControl(
          `education${i}`,
          this.formBuilder.group({
            course1: new FormControl(this.education[i-1].course1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
            ]),
            clg_name1: new FormControl(this.education[i-1].clg_name1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
            ]),
            fromDate1: new FormControl(this.education[i-1].fromDate1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
              FormValidators.dateValidation,
            ]),
            toDate1: new FormControl(this.education[i-1].toDate1, [
              Validators.required,
              FormValidators.notOnlyWhitespace,
              FormValidators.dateValidation,
            ]),
          })
        );
      }

    }
    else {
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
            // Validators.minLength(2),
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
          skill: new FormControl(''),
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
    
    // console.log(this.addWorkCount)

    
  }  

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
  get about() {
    return this.resumeForm.get('personal.about');
  }
  
  // get fromDate1() {  
  //   return this.resumeForm.get('workExperience1.fromDate1');
  // }
  // get toDate1(){ 
  //   return this.resumeForm.get('workExperience1.toDate1');
  // }

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
      console.log('here')
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
    this.lstorage.setItem('resumeDetails',JSON.stringify(resumeDetails));
    this.resumeService.setResumeInfo(resumeDetails);
    this.resumeService.setworkArray(this.addWorkCount);
    this.resumeService.seteduArray(this.addEduCount);
    // this.resumeService.setSkills(this.skills)
    this.router.navigateByUrl(`preview/basic-resume`);
  }
}
