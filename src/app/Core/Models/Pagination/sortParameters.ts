import {HttpParams} from "@angular/common/http";

export class SortParameters{
  orderByField?:string;
  orderByAscending:boolean = true;

  static MapFromQuery(query:any):any{
    const sort:SortParameters = new SortParameters();
    sort.orderByField = query['Sort.OrderByField'] ? query['Sort.OrderByField'] : null;
    sort.orderByAscending = query['Sort.OrderByAscending'] ? JSON.parse(query['Sort.OrderByAscending']) : true;
    return sort;
  }
  static mapToQueryObject(queryParams: any, sort: SortParameters): any {
    if (sort.orderByField) {
      queryParams['SortableParams.OrderByField'] = sort.orderByField;
      queryParams['SortableParams.OrderByAscending'] = sort.orderByAscending;
    }
    return queryParams;
  }

  public mapSort(params : HttpParams):HttpParams{
    if(this.orderByField){
      params = params
        .set('SortableParams.OrderByField',this.orderByField)
        .set('SortableParams.OrderByAscending',this.orderByAscending.toString());
    }
    return params;
  }

}
