import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';

const routes: Routes = [
  {
    path: '/query-form',
    component: QueryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
