import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'blog',
  template: `
    <h1>
      {{title}}
    </h1>
    <post-list [posts]="posts"></post-list>
    <new-post (addPost)="addPost($event)"></new-post>
  `,
  providers: [BlogService]
})
export class BlogComponent implements OnInit {
  title = 'Blog';
  posts = [];

  constructor(private blogService: BlogService) { }

  getPosts(): void {
    this.blogService.getPosts().then(posts => this.posts = posts)
  }

  addPost(post): void {
    this.blogService.addPost(post)
  }

  ngOnInit():void {
    this.getPosts()
  }

}
