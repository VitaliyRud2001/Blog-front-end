import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {PostQueryParams} from "../../../Core/Models/postQueryParams";

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router:Router) { }

  searchText: string;

  postQueryParams:PostQueryParams = new PostQueryParams();

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.searchText = params['searchTerm'];
    })
  }




  display() {
      this.postQueryParams.pageSize = 4;
      this.postQueryParams.searchTerm = this.searchText;
      console.log('in subscribe ', this.searchText);
      this.router.navigate(['/posts'],{
        relativeTo : this.activatedRoute,
        queryParams : this.postQueryParams
      })




  }
}

