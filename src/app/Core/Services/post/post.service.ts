import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaginationService} from "../pagination/pagination.service";
import {PostQueryParams} from "../../Models/postQueryParams";
import {Observable} from "rxjs";
import {IPage} from "../../Models/page";
import {IPost} from "../../Models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient,
              private pagination: PaginationService) {
  }


  getPostPage(postParams: PostQueryParams): Observable<IPage<IPost>> {
    return this.pagination.getPostPage<IPost>("https://localhost:44317/api/Post",postParams);
  }
}
