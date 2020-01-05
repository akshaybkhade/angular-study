import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsingSubscribeComponent } from "./using-subscribe/using-subscribe.component";
import { UsingMergemapComponent } from "./using-mergemap/using-mergemap.component";
import { UsingForkjoinComponent } from "./using-forkjoin/using-forkjoin.component";
import { UsingMergemapAndForkjoinComponent } from "./using-mergemap-and-forkjoin/using-mergemap-and-forkjoin.component";


const routes: Routes = [
  {
    path: 'using-subscribe',
    component: UsingSubscribeComponent
  },
  {
    path: 'using-mergemap',
    component: UsingMergemapComponent
  },
  {
    path: 'using-forkjoin',
    component: UsingForkjoinComponent
  },
  {
    path: 'using-mergemap-and-forkjoin',
    component: UsingMergemapAndForkjoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
