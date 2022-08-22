import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai4';
  currentIndex = 0;
  showTab4 = true;
  currentdate = new Date();
  author = {
    name: 'Hien',
    age : 24,
  };
 
  interval$ = interval(1000);
  addr = {
    address1:"hihi",
    address2: "haha",
    city:"huhu",
    zip: "234",
    country:"sa dec"
  }
}
