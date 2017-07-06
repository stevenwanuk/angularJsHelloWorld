import { Hero } from './hero';
import { Component } from '@angular/core';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}
