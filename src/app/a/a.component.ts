import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  title:string = 'my-first-app';
  name:string = 'Darragh';
  age:number = 26;

}
