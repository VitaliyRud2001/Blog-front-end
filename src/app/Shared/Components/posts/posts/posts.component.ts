import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../../../../Core/Services/post/post.service";
import {PostQueryParams} from "../../../../Core/Models/postQueryParams";
import {IPost} from "../../../../Core/Models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostsComponent implements OnInit {
queryParams:PostQueryParams = new PostQueryParams();
posts:IPost[];
totalSize:number = 20;

  constructor(private routeActive:ActivatedRoute,
              private router:Router,
              private postService:PostService) { }

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe((params:Params)=>{
      this.queryParams = PostQueryParams.MapFromQuery(params,1,4);
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

  pageChanged($event: any) {
    console.log("selected page", $event);
    this.queryParams.page = $event;
    this.queryParams.firstRequest = false;
    this.changeUrl();
  }

  private changeUrl() {
    this.router.navigate(['.'],{
      relativeTo : this.routeActive,
      queryParams : this.queryParams
    })
  }
}
