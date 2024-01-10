import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
    providedIn: 'root'
})
export class DBZService {
    constructor() { }

    public characters: Character[] = [
    {   
        id: uuid(),
        name: 'Krilin',
        power: 1000
    },
    {
    id: uuid(), 
       name: 'Gokú',
       power: 10.000
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7.500
    }];

    addCharacter( character : Character){ 

        const newCharacter : Character ={ id:uuid(), ...character};
           
        this.characters.push(newCharacter);
    }
/* 
    onDeleteCharacter(index : number){
        
        if( index > -1 ){
            console.log('Llegué al evento')
            this.characters.splice(index,1);
        }

    } */

    onDeleteCharacterById( id:string ){
        this.characters = this.characters.filter( character => character.id !== id);

        this.characters.forEach ((value ,index) => {
        
        })
    }
 
}