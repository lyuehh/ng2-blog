import { Component } from '@angular/core';

@Component({
  selector: 'blog',
  template: `
    <h1>
      {{title}}
    </h1>
    <post-list [posts]="posts"></post-list>
  `
})
export class BlogComponent {
  title = 'Blog';

  posts = [{
    title: '标题11',
    author: '作者11',
    content: '内容11'
  },
  {
    title: '标题22',
    author: '作者22',
    content: '内容22'
  }]
}
