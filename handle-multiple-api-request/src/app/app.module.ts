import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingSubscribeComponent } from './using-subscribe/using-subscribe.component';
import { HttpClientModule } from "@angular/common/http";
import { UsingMergemapComponent } from './using-mergemap/using-mergemap.component';
import { UsingForkjoinComponent } from './using-forkjoin/using-forkjoin.component';
import { UsingMergemapAndForkjoinComponent } from './using-mergemap-and-forkjoin/using-mergemap-and-forkjoin.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingSubscribeComponent,
    UsingMergemapComponent,
    UsingForkjoinComponent,
    UsingMergemapAndForkjoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
