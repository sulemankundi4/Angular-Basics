import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counter = 0;

  incrementCount() {
    this.counter++;
  }

  decrementCount() {
    this.counter--;

    this.counter < 0 ? alert('Counter cannot be negative') : 0;
  }
}
