import { Component, Input } from '@angular/core';

@Component({
  selector: 'post',
  template: `
    <h2>标题: {{ post.title }}</h2>
    <p>作者: {{ post.author }}</p>
    <p>内容: {{ post.content }}</p>
  `
})
export class PostComponent {
  @Input() post
}
