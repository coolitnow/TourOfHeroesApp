import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import{HeroService} from '../hero.service';
import { MessageService } from '../message.service';

//parent of hero-detail component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];


  //constructors shouldn't do anything except minimal initialization. 
  //inject services into component here
  constructor(private heroService: HeroService) { }

  //ngOnInit() is a lifecycle hook and is called shortly after creating a component 
  //good place to put initialization logic
  ngOnInit(): void {
    this.getHeroes();
  }


   //subscribe is an asynchronous way to wait for the observable to emit the array of heroes
   getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  

}
