import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-using-mergemap',
  templateUrl: './using-mergemap.component.html',
  styleUrls: ['./using-mergemap.component.scss']
})
export class UsingMergemapComponent implements OnInit {

  username: string;
  photos: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataByUsingMergeMap();
  }

  getDataByUsingMergeMap() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users?username=Bret').pipe(
      map(users => {
        const user = users[0];
        this.username = user.username;
        return user;
      }), mergeMap(user => this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?userId=${user.id}`))
    ).subscribe((photos:any[]) => {
      this.photos = photos.slice(1, 10);
    });
  }

}
