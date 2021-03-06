import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//must register a provider before Angular can inject a service into a component
//a provider can create or deliver a service. here it instantiates the HeroService class to proide the service
//default registers a provider with the root injector
@Injectable({
  providedIn: 'root'
  //when provided at the root level, Angular creates a single, shared instance of HeroService and injects it into any class that asks for it. kind of like a universal variable/function
  //always use the root injector unless you only want the service available if the consumer imports a particular @NgModule
})
export class HeroService {

  //observable is a key type of class in angular. can handle multiple values, asynchronous programming in JS, and event handling
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    //For now, assume that a hero with the specified 'id' always exists
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) { }
}
