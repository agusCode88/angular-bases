import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName: string[] = ['Spiderman','Iroman','Hulk','Thor'];
  public deletedHero?: string;

  removeLastHero(): void{
       
    this.deletedHero = this.herosName.pop();

   
  }

}
