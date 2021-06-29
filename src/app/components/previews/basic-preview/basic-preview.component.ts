import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResumeinfoService } from 'src/app/shared-services/resumeinfo.service';
import { faArrowDown,faFont, faEnvelope, faPhoneAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AngularCreatePdfService } from 'angular-create-pdf';
import { Router } from '@angular/router';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-basic-preview',
  templateUrl: './basic-preview.component.html',
  styleUrls: ['./basic-preview.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class BasicPreviewComponent implements OnInit {
  resumeObject;
  exampleObject;
  resumeDetails;
  workExp; 
  education;
  language;
  fontStyle;
  edit : boolean = false;

  faArrowDown = faArrowDown;
  faFont = faFont;
  faEnvelope = faEnvelope; 
  faPhoneAlt = faPhoneAlt;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMobileAlt = faMobileAlt;

  fonts = ['Ubuntu','Raleway','Roboto','Overpass','Hind'];
  storage : Storage = localStorage;
  resumeType;
  // sStorage : Storage = sessionStorage;
  tasks = [];
  constructor(private resumeService: ResumeinfoService,private pdfService: AngularCreatePdfService,private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.resumeType = JSON.parse(this.storage.getItem('type'));
    this.resumeObject = this.resumeService.getResumeInfo();
    this.resumeDetails = JSON.parse(this.storage.getItem('resumeDetails'));
    console.log(this.resumeDetails);
    this.workExp = Object.values(this.resumeDetails.workExp);
    console.log(this.workExp)  
    this.education = Object.values(this.resumeDetails.edu)   
    console.log(this.education)
    this.language = this.resumeDetails.language.split(',')
    console.log(this.language)
    for(let i = 0;i < this.workExp.length; i++) {
      this.tasks.push(this.workExp[i].tasks1)      
    }
    // console.log(this.tasks) 
    //this.fontStyle = JSON.parse(this.storage.getItem('fontStyle'));
    // this.setStyle(this.fontStyle)
  }

  public createPdfTem(ele: any) {
    this.pdfService.createPdf(ele, 'Download PDF');
  }

  setFont(event){
    let style = event.target.textContent;
    console.log(style);    
    this.setStyle(style);
    this.storage.setItem('fontStyle',JSON.stringify(style));
  }

  setStyle(style) {
    let ptag = document.querySelector('.resume-preview-card');
    for(let font of this.fonts){
      ptag.classList.remove(`ptag1${font}`);
    }
    ptag.classList.add(`ptag1${style}`);
  }

  editForm() {
    this.edit = true;
    this.resumeService.setEdit(this.edit)
    this.router.navigateByUrl(`resume/resume-form`);
  }

  
}
