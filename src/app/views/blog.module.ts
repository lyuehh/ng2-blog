import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlogComponent } from './blog.component';
import { PostListComponent } from '../components/PostList.component'
import { PostComponent } from '../components/Post.component'

@NgModule({
  // 声明组件
  declarations: [
    BlogComponent,
    PostListComponent,
    PostComponent
  ],

  // 导入模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],

  // 导出组件
  exports: [
    BlogComponent
  ],
  providers: []
})
export class BlogModule { }
