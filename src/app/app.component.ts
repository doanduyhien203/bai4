import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bai4';
  currentIndex = 0;
  showTab4 = true;
  currentdate = new Date();
  author = {
    name: 'Hien',
    age: 24,
  };

  interval$ = interval(1000);
  addr = {
    address1: 'hihi',
    address2: 'haha',
    city: 'huhu',
    zip: '234',
    country: 'sa dec',
  };
  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];
  formatAddress(addr: {
    address1: string;
    address2: string;
    city: string;
    zip: string;
    country: string;
  }) {
    //  console.log('function run',addr)
    return (
      addr.address1 +
      ' ' +
      addr.address2 +
      ', ' +
      addr.city +
      ', ' +
      addr.zip +
      ', ' +
      addr.country
    );
  }
  addUser() {
    //    this.users = [...this.users, {name: 'new user',age: 30}];
    this.users.push({ name: 'new user', age: 30 });
  }
}
