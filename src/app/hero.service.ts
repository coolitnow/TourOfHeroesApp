import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//must register a provider before Angular can inject a service into a component
//a provider can create or deliver a service. here it instantiates the HeroService class to proide the service
//default registers a provider with the root injector
@Injectable({
  providedIn: 'root'
  //when provided at the root level, Angular creates a single, shared instance of HeroService and injects it into any class that asks for it. kind of like a universal variable/function
  //always use the root injector unless you only want the service available if the consumer imports a particular @NgModule
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
