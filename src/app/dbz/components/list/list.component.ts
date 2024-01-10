
import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrls: ['./list.component.css'],

})
export class ListComponent { 

  // Se le pasa la lista por defecto al padre de las vistas
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power:10
  }]

  //EMITIR ESTO
  //onDelete = Index value: number  

  @Output() 
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
     // TODO: Emitir el id del personaje
     this.onDelete.emit(id);
  }

}
