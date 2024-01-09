import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1>Hola Counter Component </h1>
    <hr>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increseBy()">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="decreseBy()">-1</button>

    `
})

export class CounterComponent implements OnInit {
    constructor() { }

    public counter : number = 10;
  
    increseBy(): void{
      this.counter +=1;
    }
  
    decreseBy(): void{
      this.counter -=1;
    }
  
    resetBy(){
      this.counter = 10;
    }
  

    ngOnInit() { }
}

