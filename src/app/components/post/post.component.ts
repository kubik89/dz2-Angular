import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {allPosts} from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  posts: allPosts[];
  choosenPost: allPosts[];
  constructor(private myServ: PostService) {
    myServ.getAllPosts().subscribe(value => {
      this.posts = value;
    });
  }
  getDetails(post: allPosts): void {
    this.myServ.getPostOfSingleUser(post.userId).subscribe(value => {
      console.log(value);
    });
  }

}
