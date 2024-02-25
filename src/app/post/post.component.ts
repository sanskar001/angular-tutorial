import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

/*
ngOnInit - Component lifecycle hook

- This hook call when component get fully initialize into DOM. 

Note: This is different than constructor() method

- constructor will work soon after the object class created.

Conclusion: ngOnInit() execute after constructor()

* Data binding - 
  - using string interpolation

  Eg. <h1>{{title}}</h1>
*/

/*
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  title: string = 'Custom Post';

  constructor() {}

  ngOnInit(): void {}
}
*/

/*
Chapter: SHARE DATA BETWEEN COMPONENTS

1. Parent to child component via "@Input" decorator.
2. Child to parent component via "@ViewChild" decorator.
3. Child to parent when there is Event, using the "@Output "decorator and "event emitter".

*/

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
