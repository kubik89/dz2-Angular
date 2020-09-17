import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {path: 'posts', component : PostComponent}
];
const routeComments: Routes = [
  {path: 'comments', component: CommentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routeComments)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
