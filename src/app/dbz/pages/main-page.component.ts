import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class  MainPageComponent {
    constructor() { }

    public characters: Character[] = [
        {
        name: 'Krilin',
        power: 1000
    },
    {
       name: 'Gokú',
       power: 10.000
    },{
        name: 'Vegeta',
        power: 7.500
    }];

    onNewCharacter( character : Character){ 
        this.characters.push(character)
    }

    onDeleteCharacter(index : number){
        
        if( index > -1 ){
            console.log('Llegué al evento')
            this.characters.splice(index,1);
        }

    }

}