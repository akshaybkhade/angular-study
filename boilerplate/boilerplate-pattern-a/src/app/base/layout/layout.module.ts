import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    PageNotFoundComponent,
    LayoutContainerComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
