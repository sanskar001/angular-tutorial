import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstTaskComponent } from './first-task/first-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}
