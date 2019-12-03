import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-using-forkjoin',
  templateUrl: './using-forkjoin.component.html',
  styleUrls: ['./using-forkjoin.component.scss']
})
export class UsingForkjoinComponent implements OnInit {

  username: string;
  albums: any;
  todos: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataByUsingForkJoin();
  }

  getDataByUsingForkJoin() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users?username=Bret')
      .pipe(map(users => users[0]))
      .subscribe( user => {
        this.username = user.name;

        const albumsSubscription = this.httpClient.get('https://jsonplaceholder.typicode.com/albums?userId=' + user.id);
        const todosSubscription = this.httpClient.get('https://jsonplaceholder.typicode.com/todos?userId=' + user.id);

        forkJoin([albumsSubscription, todosSubscription]).subscribe(result => {
          this.albums = result[0];
          this.todos = result[1];
        });
      });
  }

}
