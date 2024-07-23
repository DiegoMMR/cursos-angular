import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames: string[] = ['Deadpool', 'Daredevil', 'Hulk', 'She Hulk']
  lastDeleted: string = ''

  deleteLastHero() {
    this.lastDeleted = this.heroNames.pop() || ''
  }
}
