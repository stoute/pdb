import { Component, Input } from 'angular2/core';

import { Hero } from '../ng2_hero/hero.ts';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-hero-detail',
  templateUrl: 'template.html',
})
export class Ng2HeroDetail {
  @Input() 
  hero: Hero;
}
