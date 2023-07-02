import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescripcion(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = 'SpiderMan';
  }

  changeHeroAge(): void {
    this.age = 100;
  }

  resetForm():void{
    this.name= 'Ironman';
    this.age =35;
  }
}
