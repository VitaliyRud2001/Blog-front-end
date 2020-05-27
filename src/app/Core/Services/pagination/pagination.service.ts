import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PostQueryParams} from "../../Models/postQueryParams";
import {Observable} from "rxjs";
import {IPage} from "../../Models/page";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private httpClient:HttpClient) { }

  getPostPage<T>(getUrl:string,postParams:PostQueryParams):Observable<IPage<T>>{
    let params = new HttpParams();
    params = postParams.getHttpParams();
    return this.httpClient.get<IPage<T>>(getUrl,{params:params});
  }
}
