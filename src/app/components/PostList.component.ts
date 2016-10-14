import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-list',
  template: `
  <div *ngFor="let post of posts">
    <post [post]="post"></post>
  </div>
  `
})
export class PostListComponent {
  @Input() posts
}
