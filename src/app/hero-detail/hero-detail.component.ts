import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


//child component of HeroesComponent

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input() decorator makes a property available for binding by external components
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute, 
    //holds info about the route to this instance of HeroDetailComponent
    private heroService: HeroService,
    //gets hero data from remote server and will use it to get the hero to display
    private location: Location,
    //an Angular service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
