import {HttpParams} from "@angular/common/http";
import {PageableParams} from "./Pagination/pageableParams";
import {SortParameters} from "./Pagination/sortParameters";


export class PostQueryParams extends PageableParams{

  SearchTerm?:string;
  tags?:number[];
  SortableParams : SortParameters;

  static MapFromQuery(params:any,defaultPage:number=1,defaultPageSize:number=4):PostQueryParams {
    const post = new PostQueryParams();
    post.SearchTerm = params.SearchTerm ? params.SearchTerm : undefined;
    post.tags = params.tags ? params.tags : undefined;
    post.SortableParams = params.SortableParameters ? params.SortableParameters : undefined;
    post.page = params.page ? params.page : defaultPage;
    post.pageSize = params.pageSize ? params.pageSize : defaultPageSize;
    return post;
  }
  public getHttpParams():HttpParams{
    let params = new HttpParams();
    params = this.mapPagination(params,this);
    if(this.tags?.length>0){
      for(const id of this.tags){
        params = params.append("tags",id.toString());
      }
    }
    if(this.SearchTerm){
      params = params.set('SearchTerm',this.SearchTerm);
    }
    if(this.SortableParams){
      params = this.SortableParams.mapSort(params);
    }
    return params;

  }
}
