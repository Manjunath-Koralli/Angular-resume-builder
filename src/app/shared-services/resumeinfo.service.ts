import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeinfoService {

  constructor() { }

  resumeObject;
  skills;

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
}
