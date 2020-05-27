import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Shared/Components/home/home.component";
import {PostsComponent} from "./Shared/Components/posts/posts/posts.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'posts',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
