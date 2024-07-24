import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  charactersList: Character[] = []

  @Output()
  onDeleteCharaacter: EventEmitter<string> = new EventEmitter()

  emitDeleteCharacter(uuid: string) {
    this.onDeleteCharaacter.emit(uuid)
  }
}
