import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient){}

    createAndStorePosts(title: string, content: string){
        const postData: Post = {title: title, content: content};
        this.http.post('https://angular-learn-http-8779d.firebaseio.com/posts.json',
        postData,
        {
            observe: 'response'
        })
        .subscribe(
          responseData => {
            console.log(responseData);
          }
        );
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('custom', 'key');
       return this.http.get<{[key: string]: Post}>(
           'https://angular-learn-http-8779d.firebaseio.com/posts.json',
           {
               headers: new HttpHeaders({'Custom-Header': 'Hello'}),
               //params: new HttpParams().set('print','pretty')
               params: searchParams
           })
        .pipe(map(responseData => {
          const postArray: Post[] = [];
          for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postArray.push({ ...responseData[key], id: key});
            }
          }
          return postArray;
        }),
            catchError(errorRes => {
                //perform something
               return throwError(errorRes);
            })
        );
    }

    deletePost(){
        return this.http.delete('https://angular-learn-http-8779d.firebaseio.com/posts.json',
        {
            observe: 'events',
            responseType: 'json'
        }).pipe(tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Response){
                console.log(event.body);
            }
        }));
    }
}