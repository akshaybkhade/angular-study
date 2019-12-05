import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";
import { Posts } from "../../models/posts.model";

@Component({
  selector: 'app-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.scss']
})
export class PostsListingComponent implements OnInit {

  postList: Posts[];
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.loadPostsList();
  }

  public loadPostsList() {
    this.postsService.getPostsList().subscribe((res: Posts[]) => {
      this.postList = res;
    });
  }
}
