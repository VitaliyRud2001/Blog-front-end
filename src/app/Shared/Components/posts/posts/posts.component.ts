import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../../../../Core/Services/post/post.service";
import {PostQueryParams} from "../../../../Core/Models/postQueryParams";
import {IPost} from "../../../../Core/Models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
queryParams:PostQueryParams = new PostQueryParams();
posts:IPost[];
content="<font face=\"Arial\">Hi!</font><blockquote><p><font face=\"Arial\">I love to stay here!</font></p></blockquote>";
totalSize:number;
  constructor(private routeActive:ActivatedRoute,
              private router:Router,
              private postService:PostService) { }

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params:Params)=>{
      this.queryParams = PostQueryParams.MapFromQuery(params,1,5);
      console.log('params in ngOnInit',this.queryParams);
      this.getPosts(this.queryParams);
    });
  }
  getPosts(params:PostQueryParams): void{
    this.postService.getPostPage(params).subscribe({
      next:pageData=>{
        console.log('params is',params);
        console.log('total size if',pageData.totalCount);
        console.log('size of array is',pageData.page.length);
        console.log('array returned is ',pageData.page);
       this.posts = pageData.page;
       this.totalSize = pageData.totalCount;
       console.log(this.posts);
      },
      error:err=>{
        console.log(err);
      }
    });
  }

}
