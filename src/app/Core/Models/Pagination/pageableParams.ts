import {HttpParams} from "@angular/common/http";

export class PageableParams{
  page:number = 1;
  pageSize:number = 10;
  firstRequest:boolean = true;

  public mapPaginationToQuery(queryParams:any, pagination:PageableParams):any{
    queryParams.page = pagination.page;
    queryParams.pageSize = pagination.pageSize;
    queryParams.firstRequest = pagination.firstRequest;
    return queryParams;
  }

  public mapPagination(params:HttpParams, parameters:PageableParams ):HttpParams{
    return params
      .set('page',parameters.page.toString())
      .set('pageSize',parameters.pageSize.toString())
      .set('firstRequest',parameters.firstRequest.toString());
  }

}
