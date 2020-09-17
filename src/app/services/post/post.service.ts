import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {allPosts} from '../../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private myHttp: HttpClient) {
  }

  getAllPosts(): Observable<allPosts[]> {
    return this.myHttp.get<allPosts[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostOfSingleUser(post: number): Observable<allPosts[]> {
    return this.myHttp.get<allPosts[]>(`http://jsonplaceholder.typicode.com/comments?postId=${post}`);
  }
}
