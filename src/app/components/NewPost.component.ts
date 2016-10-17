import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-post',
  template: `
  <div>
    <h2>新建post</h2>
    <form>
      <p>
        <label htmlFor="title">标题:</label>
        <input id="title" type="text" name="title" [(ngModel)]="title" />
      </p>
      <p>
        <label htmlFor="author">作者:</label>
        <input id="author" type="text" name="author" [(ngModel)]="author" />
      </p>
      <p>
        <label htmlFor="content">内容:</label>
        <input id="content" type="text" name="content" [(ngModel)]="content" />
      </p>
      <p>
        <button type="button" (click)="add()">提交</button>
      </p>
    </form>
  </div>
  `
})
export class NewPostComponent {
  @Output() addPost = new EventEmitter();

  title = '';
  author = '';
  content = '';

  add() {
    var post = {
      title: this.title,
      author: this.author,
      content: this.content
    }
    console.log(post)
    this.addPost.emit(post)
  }
}
