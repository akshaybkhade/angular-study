import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Posts, PostsResponse } from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPostsList(): Observable<Posts[]> {
    const url = 'http://demo0838582.mockable.io/posts';
    return this.httpClient.get(url).pipe(map((res: PostsResponse[]) => {
      let respArr: Posts[] = [];
      res.forEach((post: PostsResponse) => {
        respArr.push(new Posts(post));
      });
      return respArr;
    }));
  }
}
