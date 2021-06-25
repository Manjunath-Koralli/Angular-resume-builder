import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-templates',
  templateUrl: './cv-templates.component.html',
  styleUrls: ['./cv-templates.component.scss']
})
export class CvTemplatesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoResumeForm(type : string){
    this.router.navigateByUrl(`resume/${type}-resume`);
  }

}
