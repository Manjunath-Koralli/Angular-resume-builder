import { Component, OnInit } from '@angular/core';
import { faVial, faLayerGroup, faCommentAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faMedium, faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faVial = faVial;
  faLayerGroup = faLayerGroup;
  faCommentAlt = faCommentAlt;
  faAddressCard = faAddressCard;
  faFacebook = faFacebook; 
  faLinkedin= faLinkedin;
  faMedium = faMedium;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;
  
  constructor() { }

  ngOnInit(): void {
  }

}
