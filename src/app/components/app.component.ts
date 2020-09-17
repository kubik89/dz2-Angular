import { Component } from '@angular/core';
import {PostService} from '../services/post/post.service';
import {allPosts} from '../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: allPosts[];

  constructor(private postS: PostService) {
    this.postS.getAllPosts().subscribe(value => {
    this.posts = value;
    });
  }
}

