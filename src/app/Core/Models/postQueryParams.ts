import {HttpParams} from "@angular/common/http";
import {PageableParams} from "./Pagination/pageableParams";
import {SortParameters} from "./Pagination/sortParameters";

export class PostQueryParams extends PageableParams{

  searchTerm?:string;
  tags?:number[];
  sortableParameters : SortParameters;
  
}
