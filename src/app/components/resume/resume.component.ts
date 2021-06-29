import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeinfoService } from 'src/app/shared-services/resumeinfo.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  storage : Storage = sessionStorage;
  lstorage : Storage = localStorage;
  edit : boolean = false;
  resumeDetails: any;
  constructor(private router: Router,private resumeService: ResumeinfoService) { }

  ngOnInit(): void {
    this.resumeDetails = JSON.parse(this.lstorage.getItem('resumeDetails'));
    console.log(Object.entries(this.resumeDetails));
  }

  gotoResumeForm(type : string){
    this.resumeService.setEdit(false);
    this.edit = false;
    // this.storage.setItem('edit',JSON.stringify(this.edit));
    this.lstorage.setItem('type',JSON.stringify(type));    
    this.router.navigateByUrl(`resume/resume-form`);
  }
}
