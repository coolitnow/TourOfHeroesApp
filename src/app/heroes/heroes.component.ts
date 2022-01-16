import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';

  constructor() { }

  //ngOnInit() is a lifecycle hook and is called shortly after creating a component 
  //good place to put initialization logic
  ngOnInit(): void {
  }

}
