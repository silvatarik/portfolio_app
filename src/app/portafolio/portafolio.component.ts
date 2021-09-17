import { Component, OnInit } from '@angular/core';
import { CvsilvatariktService } from '../services/cvsilvatarik.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {
  constructor(public cv:CvsilvatariktService) {}

  ngOnInit(): void {}

  calculateClasses(categoria) {
     console.log(categoria);
    return {
      'col-md-4':true, 'col-sm-6':true, 'col-xs-12':true, 'portfolio-item':true ,categoria:true
      // col-md-4 col-sm-6 col-xs-12 portfolio-item {{proyecto.categoria}}
    };
}
}
