import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        return this.http.post<{ name: string }>(
            'https://udemy-da4cd-default-rtdb.firebaseio.com/posts.json',
            postData
        );
    }
    createAndStorePost2(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http.post<{ name: string }>(
            'https://udemy-da4cd-default-rtdb.firebaseio.com/posts.json',
            postData
        ).subscribe();
    }

    fetchPosts() {
        return this.http
            .get<{ [key: string]: Post }>('https://udemy-da4cd-default-rtdb.firebaseio.com/posts.json')
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return postsArray;
                })
            );
    }

    deleteAllPosts() {
        return this.http.delete('https://udemy-da4cd-default-rtdb.firebaseio.com/posts.json');
    }
}