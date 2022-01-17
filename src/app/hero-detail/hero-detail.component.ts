import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

//child component of HeroesComponent

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input() decorator makes a property available for binding by external components
  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
