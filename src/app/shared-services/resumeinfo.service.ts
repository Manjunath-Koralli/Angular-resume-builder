import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeinfoService {

  constructor() { }

  resumeObject;
  skills;
  workArray;
  educationArray;
  edit;

  setResumeInfo(resumeObject){
    this.resumeObject = resumeObject;
  }

  getResumeInfo(){
    return this.resumeObject;
  }

  setSkills(skills) {
    this.skills = skills;
  }

  getSkills (){
    return this.skills;
  }

  setworkArray(workArray){
    this.workArray = workArray;
  }

  getworkArray(){
    return this.workArray;
  }

  seteduArray(eduArray){
    this.educationArray = eduArray;
  }

  geteduArray(){
    return this.educationArray;
  }

  setEdit(edit) {
    this.edit = edit;
  }

  getEdit() {
    return this.edit;
  }
}
