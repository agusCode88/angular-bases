import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class  MainPageComponent {

    //Inyección de dependencias
    constructor( private dbzService : DBZService ) { }

    get characters(): Character[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacter( id:string ):void {
        this.dbzService.onDeleteCharacterById( id );
    }

    onNewCharacter( character: Character){
        this.dbzService.addCharacter( character );
    }



}