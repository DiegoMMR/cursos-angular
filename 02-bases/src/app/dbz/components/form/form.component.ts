import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output()
  onFormSubmit: EventEmitter<Character> = new EventEmitter()

  character: Character = {
    name: '',
    power: 0
  }

  emitSubmitForm() {
    if(this.character.name.length === 0) return
    this.onFormSubmit.emit(this.character)
    this.resetForm()
  }

  resetForm() {
    this.character = {
      name: '',
      power: 0
    }
  }
}
