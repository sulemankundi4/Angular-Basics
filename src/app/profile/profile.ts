import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  // styleUrl: './profile.css',
  styles: ['h1{color: red;}'],
})
export class Profile {
  // Data for @if example
  isLoggedIn = true;
  username = 'John Doe';

  // Data for @for example
  users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  // Data for @switch example
  userRole = 'admin'; // Can be 'admin', 'user', 'guest'

  // Method to toggle login state
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
