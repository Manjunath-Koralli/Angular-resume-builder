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
  edit : boolean = false;
  constructor(private router: Router,private resumeService: ResumeinfoService) { }

  ngOnInit(): void {
  }

  gotoResumeForm(type : string){
    this.resumeService.setEdit(false);
    this.edit = false;
    // this.storage.setItem('edit',JSON.stringify(this.edit));
    this.router.navigateByUrl(`resume/${type}-resume`);
  }
}
