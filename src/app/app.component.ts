import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
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
  error = null;
  private errorSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  createWithoutFetching(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost2(postData.title, postData.content);
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService
      .createAndStorePost(postData.title, postData.content)
      .subscribe((responseData) => {
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        setTimeout(() => {
          this.isFetching = false;
        }, 1500);
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
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

  onHandleError(){
    this.error = null;
  }

}
