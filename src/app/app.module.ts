
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HttpClientModule} from "@angular/common/http";
import { AppNavbarComponent } from './Shared/Components/app-navbar/app-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Shared/Components/home/home.component';
import {PostsComponent} from "./Shared/Components/posts/posts/posts.component";
import { AddPostComponent } from './Shared/Components/add-post/add-post.component';


import { SelectImageDialogComponent } from './Shared/Components/dialogs/select-image-dialog/select-image-dialog.component';



import {MatDialogModule} from '@angular/material/dialog';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from "ngx-markdown";
import {PaginationComponent} from "./Shared/Components/pagination/pagination.component";
import { PostComponent } from './Shared/Components/post/post.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { FilterBarComponent } from './Shared/Components/filter-bar/filter-bar.component';
import {MatSelectModule} from "@angular/material/select";


export function markedOptionsFactory():MarkedOptions{
  const renderer = new MarkedRenderer();
   renderer.image=(href:string
    ,titlte:string,text:string)=>{
    let str = text.split('x');
    if(str.length>1 && !isNaN(+str[0]) && !isNaN(+str[1])  ) {
      return "<img w-100 src='" + href + "'width='" + str[0] + "' height='" + str[1] + "'/>"
    }
    return "<img src='" + href + "'/>"
  };
  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent,
    SelectImageDialogComponent,
    PaginationComponent,
    PostComponent,
    FooterComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
