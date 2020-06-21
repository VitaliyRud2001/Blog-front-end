import {HttpParams} from "@angular/common/http";
import {PageableParams} from "./Pagination/pageableParams";
import {SortParameters} from "./Pagination/sortParameters";


export class PostQueryParams extends PageableParams{

  searchTerm?:string;
  tags?:number[];
  sortableParams : SortParameters;

  static MapFromQuery(params:any,defaultPage:number=1,defaultPageSize:number=4):PostQueryParams {
    const post = new PostQueryParams();
    post.searchTerm = params.searchTerm ? params.searchTerm : undefined;
    post.tags = params.tags ? params.tags : undefined;
    post.sortableParams = params.sortableParameters ? params.sortableParameters : undefined;
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
    if(this.searchTerm){
      params = params.set('searchTerm',this.searchTerm);
    }
    if(this.sortableParams){
      params = this.sortableParams.mapSort(params);
    }
    return params;

  }
}
