import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}

  // Traditional Approach

  // onKeyup($event: KeyboardEvent) {
  //   console.log($event.key);

  //   // This below code run when we enter "Enter" key
  //   if ($event.keyCode === 13) {
  //     console.log('Enter key pressed');
  //   }
  // }

  // ---------------------------

  // Event Filtering

  onKeyup() {
    // This below code run when we enter "Enter" key
    console.log('Enter key pressed');
  }
}
