import { Component } from '@angular/core';

@Component({
  selector: 'blog',
  template: `
    <p>{{ title }}</p>
    <a href="/blog">blog</a>
  `
})
export class HomeComponent {
  title = 'home page';
}
