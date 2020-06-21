import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Shared/Components/home/home.component";
import {PostsComponent} from "./Shared/Components/posts/posts/posts.component";
import {AddPostComponent} from "./Shared/Components/add-post/add-post.component";
import {PostComponent} from "./Shared/Components/post/post.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'posts',component:PostsComponent},
  {path :'add-post',component:AddPostComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
