import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>{{contador}}</h3>
<button (click)="countBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="countBy(-1)">-1</button>
`
})
export class CounterComponent {
  private DEFAULT_COUNTER = 10
  contador = this.DEFAULT_COUNTER

  countBy(value: number) {
    this.contador += value
  }

  reset() {
    this.contador = this.DEFAULT_COUNTER
  }
}
