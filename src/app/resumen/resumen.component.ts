import { Component, OnInit } from '@angular/core';
import { CvsilvatariktService } from '../services/cvsilvatarik.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent implements OnInit {
  skills: [] = [];

  constructor(public cv: CvsilvatariktService) {}

  ngOnInit() {}
}
