import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResumeinfoService } from 'src/app/shared-services/resumeinfo.service';
import { faArrowDown,faFont } from '@fortawesome/free-solid-svg-icons';
import { AngularCreatePdfService } from 'angular-create-pdf';

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
  
  faArrowDown = faArrowDown;
  faFont = faFont;
  skills: Skill[] = [
    { name: 'Public Speaking' },
    { name: 'Team Work' },
    { name: 'Agile Methodologies' },
    { name: 'SEO' },
    { name: 'SEO' },
  ];

  fonts = ['Ubuntu','Raleway','Roboto','Overpass','Hind'];

  constructor(private resumeService: ResumeinfoService,private pdfService: AngularCreatePdfService) {}

  ngOnInit(): void {
    this.resumeObject = this.resumeService.getResumeInfo();
    //this.skills = this.resumeService.getSkills();
    console.log(this.resumeObject);
    this.exampleObject = {
      name: 'Manjunath Koralli',
      about: 'I am a software developer',
      contact: '9880919001',
      email: 'mskoralli@gmail.com',
      github: 'github.com/manjunath-koralli',      
      linkedin: 'manjunath-koralli', 
      language: [
        'English','Kannada','Hindi','Konkani','Tamil'
      ],
      education: [
        {
          course : 'BE',
          clg_name : 'Sahyadri',
          years : new Date() + "- " + new Date(),
        },
        {
          course : 'BE',
          clg_name : 'Sahyadri',
          years : new Date() + "- " + new Date(),
        }
      ],       
      experience: [
        {
          designation : 'developer',
          cname : 'slk',
          years : new Date() + "- " + new Date(),
          description : [
            'Worked on integration','Worked on API'
          ]          
        },
        {
          designation : 'ui developer',
          cname: 'infy',
          years : new Date() + "- " + new Date(),
          description : [
            'Worked on integration1','Worked on API1'
          ]
        },
      ],
           
      org: 'CLOUDS'
    }; 
    console.log(this.exampleObject);
    console.log(this.skills);
  }

  public createPdfTem(ele: any) {
    this.pdfService.createPdf(ele, 'Download PDF');
  }

  setFont(event){
    let style = event.target.textContent;
    console.log(style);    
    this.setStyle(style);
    // if(style === 'Ubuntu'){
    //   ptag.classList.add('ptag1Ubuntu');
    // }
    // else if(style === '')
    // let containerCard = document.querySelector('.resume-preview-card');  
    // containerCard.classList.add('resume-font');
  }

  setStyle(style) {
    let ptag = document.querySelector('.ptag');
    for(let font of this.fonts){
      ptag.classList.remove(`ptag1${font}`);
    }
    ptag.classList.add(`ptag1${style}`);
  }

  
}
