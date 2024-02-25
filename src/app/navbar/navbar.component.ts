/* CHAPTER: CREATING FIRST COMPONENT

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', // This is navbar selector same as css selector
  standalone: true, // This make compnent as standalone component

  // --***-- ADD HTML TEMPLATE --***--

  //   template: `<h3>Navbar Heading</h3>
  //     <p>This is a prargraph.</p>`,
  templateUrl: 'navbar.component.html',

  //  --***-- Note: Here styles are local scoped for component. --***--

  // Inline styles - string, string[]
  //   styles: 'h3 {color: red;} p {color: blue;}',

  //   styles: ['h3 {color: red; font-family: sans-serif;}', 'p {color: blue;}'],

  // Including one or more styles by linking urls
  styleUrl: 'navbar.component.css',
  //   styleUrls: ["a.component.css", "b.component.css"]
})
export class NavbarComponent {
  title: string = 'Navbar';
}


*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css',
})
export class NavbarComponent {
  title: string = 'Navbar';
}
