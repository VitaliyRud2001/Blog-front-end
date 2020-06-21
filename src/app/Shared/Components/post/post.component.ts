import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from "../../../Core/Services/post/post.service";
import {IPost} from "../../../Core/Models/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  post:IPost;
  constructor(private postService:PostService,private routeActive:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActive.queryParams.subscribe(params=>{
      if(params['id']){
       this.postService.getPostById(+params['id']).subscribe(p=>{
         this.post = p;
       });
      }
    })

  }


}
