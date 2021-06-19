import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faMedium, faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook; 
  faLinkedin= faLinkedin;
  faMedium = faMedium;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
