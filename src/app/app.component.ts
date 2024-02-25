import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';

/*

2. Child to parent component via "@ViewChild" decorator.
  Eg. @ViewChild(app-child-selector or ChildComponent) => component;

----- ngAfterViewInit() -----

- It is component lifecycle hook which execute after the total view initialized on the browser DOM.

*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title: string = 'angular-tutorial';
  message: string = '';
  parentMessage: string = 'This is message coming from parent component';
  @ViewChild(PostComponent) childComp: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.message = this.childComp.childMessage;
  }

  messageEventHandler(msg: string) {
    this.message = msg;
  }
}
