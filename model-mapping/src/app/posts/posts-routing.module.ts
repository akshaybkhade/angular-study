import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListingComponent } from "./components/posts-listing/posts-listing.component";


const routes: Routes = [
  {
    path: 'list',
    component: PostsListingComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
