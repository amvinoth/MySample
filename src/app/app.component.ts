import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myEvent(userName:string){
    console.log(userName);
    console.log('Vinoth first github change');
  }
  
  
}
