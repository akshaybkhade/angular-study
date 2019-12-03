import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from "rxjs/operators";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-using-mergemap-and-forkjoin',
  templateUrl: './using-mergemap-and-forkjoin.component.html',
  styleUrls: ['./using-mergemap-and-forkjoin.component.scss']
})
export class UsingMergemapAndForkjoinComponent implements OnInit {

  username: string;
  posts;
  albums;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataByUsingMergeMapAndForkJoin();
  }

  getDataByUsingMergeMapAndForkJoin() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users?username=Bret').pipe(
      map(users => {
        const user = users[0];
        this.username = user.name;
        return user;
      }), mergeMap(user => {
        const postsSubscription = this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
        const albumsSubscription = this.httpClient.get('https://jsonplaceholder.typicode.com/albums?userId=' + user.id);
        return forkJoin([postsSubscription, albumsSubscription]);
      })).subscribe(res => {
        this.posts = res[0];
        this.albums = res[1];
    });
  }

}
