import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.css',
})
export class FirstTaskComponent {
  postTitle: string = '';
  postDetail: string = '';
  postImageUrl: string = '';
  moreInfoLink: string = '';

  constructor() {}
}

// https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=8577s
// https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png
