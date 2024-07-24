import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  characters: Character[] = [
    {uuid: uuid(), name: 'Krillin', power: 500},
    {uuid: uuid(), name: 'Kakaroto', power: 9001},
    {uuid: uuid(), name: 'Vegeta', power: 5000},
  ]

  addCharacter(character: Character): void {
    const newCharacter = {uuid: uuid(), ...character}
    this.characters.push(newCharacter)
  }

  deleteCharacter(uuid: string) {
    const pos = this.characters.findIndex(character => character.uuid === uuid)

    this.characters.splice(pos, 1)
  }
}
