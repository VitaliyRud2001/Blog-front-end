import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaginationService} from "../pagination/pagination.service";
import {PostQueryParams} from "../../Models/postQueryParams";
import {Observable} from "rxjs";
import {IPage} from "../../Models/page";
import {IPost} from "../../Models/post";
import {postUrl} from "../../../Configs/enpoints";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient,
              private pagination: PaginationService) {
  }


  getPostPage(postParams: PostQueryParams): Observable<IPage<IPost>> {
    return this.pagination.getPostPage<IPost>(postUrl,postParams);
  }
  createPost(post : FormData){
    return this.httpClient.post<IPost>(postUrl,post);
  }
  getPostById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(postUrl+`/${id}`);
  }
}
