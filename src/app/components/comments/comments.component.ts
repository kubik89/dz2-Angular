import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {CommentsService} from '../../services/comments/comments.service';
import {allComm} from '../../models/comments';
import {allPosts} from '../../models/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comm: allComm[];
  comm1: allComm[];

  constructor(private myCommentsServ: CommentsService) {
    myCommentsServ.getAllComments().subscribe(value => {
      this.comm = value;
    });
  }
  openLog(comm1: allComm): void {
    console.log(comm1.email);
  }
  getCommDetails(comm1: allComm): void {
    this.myCommentsServ.getSingleCommentByPostID(comm1.postId).subscribe(value => {
      console.log(value);
      this.comm1 = value;
    });
  }
}
