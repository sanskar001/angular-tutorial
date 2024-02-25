import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';

/* Chapter: String Interpolation => Expression

  title: string = "Angular Title"
  <h1>{{title}}</h1>
  <p>{{10 + 20}}</p> => 30

  Note: We can show string, number, boolean or any other types;
  Note: It acts like JSX expression in React.
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular-tutorial';

  constructor() {}
}
