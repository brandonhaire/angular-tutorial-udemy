import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData.title, postData.content)
    .subscribe(responseData => {
      this.onFetchPosts();
  });;
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      setTimeout(() => {
        this.isFetching = false;
      }, 1500);
    });
  }

  showPacMan() {
    this.isFetching = true;
    setTimeout(() => {
      this.isFetching = false;
    }, 1500);
  }

  onClearPosts() {
    this.postsService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    });
   }

}
