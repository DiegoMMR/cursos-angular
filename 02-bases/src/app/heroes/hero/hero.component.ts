import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name:string = 'Deadpool'
  age:number = 38

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = "Spiderman"
  }

  changeAge(){
    this.age = 20
  }

  resetForm() {
    this.name = 'Deadpool'
    this.age = 38
  }
}
