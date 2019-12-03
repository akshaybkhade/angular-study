import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-using-subscribe',
  templateUrl: './using-subscribe.component.html',
  styleUrls: ['./using-subscribe.component.scss']
})
export class UsingSubscribeComponent implements OnInit {

  username: string;
  albums: any;
  todos: any;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataByUsingSubscribe();
  }

  getDataByUsingSubscribe() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users?username=Bret')
      .pipe(map(users => users[0]))
      .subscribe( user => {
        this.username = user.name;

        this.httpClient.get('https://jsonplaceholder.typicode.com/albums?userId=' + user.id).subscribe(albums => {
          this.albums = albums;
        });

        this.httpClient.get('https://jsonplaceholder.typicode.com/todos?userId=' + user.id).subscribe(todos => {
          this.todos = todos;
        })
    });
  }
}
