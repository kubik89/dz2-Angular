import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {allComm} from '../../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private myCommService: HttpClient) { }
  getAllComments(): Observable<allComm[]> {
    return this.myCommService.get<allComm[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getSingleCommentByPostID(postId: number): Observable<allComm[]> {
    return this.myCommService.get<allComm[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}

