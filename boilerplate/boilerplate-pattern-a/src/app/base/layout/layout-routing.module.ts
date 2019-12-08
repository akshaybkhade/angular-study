import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutContainerComponent } from "./containers/layout-container/layout-container.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
