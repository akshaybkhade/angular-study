import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListingComponent } from './components/posts-listing/posts-listing.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    PostsListingComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ]
})
export class PostsModule { }
