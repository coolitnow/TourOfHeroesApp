import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import{HEROES} from '../mock-heroes';

//parent of hero-detail component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  //ngOnInit() is a lifecycle hook and is called shortly after creating a component 
  //good place to put initialization logic
  ngOnInit(): void {
  }

}
