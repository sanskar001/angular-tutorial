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

  // TRADITIONAL APPORACH

  // onKeyup($event: any) {
  //   // This below code run when we enter "Enter" key
  //   console.log('Enter key pressed: ', $event.target.value);
  // }

  // TEMPLATE VARAIABLE APPORACH

  onKeyup(value: string) {
    // This below code run when we enter "Enter" key
    console.log('Enter key pressed: ', value);
  }
}
