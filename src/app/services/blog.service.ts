import { Injectable } from '@angular/core';
import { Post } from '../models/Post'

@Injectable()
export class BlogService {
  posts = [
    { "id": '0.b82q7lhna4', "title": "000-server", "author": "typicode", "content": "123" },
    { "id": '0.16qh65otjqo', "title": "aa", "author": "abc", "content": "456" },
    { "id": '0.u7qvv0rqr0g', "title": "bb", "author": "abc", "content": "789" }
  ];

  getPosts(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }

  addPost(post): void {
    this.posts.push(post)
  }
}

