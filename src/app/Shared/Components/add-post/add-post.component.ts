import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../../Core/Services/post/post.service";
import {MatDialog} from '@angular/material/dialog';
import {SelectImageDialogComponent} from "../dialogs/select-image-dialog/select-image-dialog.component";
import {MarkdownService} from "ngx-markdown";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddPostComponent implements OnInit {

  @ViewChild('area') el:ElementRef
  @ViewChild('markdown') markdown: ElementRef;
  form:FormGroup;
  image: File;
  contentMarkDown;

  constructor(private postService:PostService,public dialog:MatDialog, private MarkDown:MarkdownService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title:new FormControl(''),
      image: new FormControl(''),
      content : new FormControl('')
    });



  }

  CreatePost() {
    const compiledMarkdown = this.MarkDown.compile(this.form.get('content').value);
    let strippedMarkDown = compiledMarkdown.replace(/(<([^>]+)>)/ig,"");
    console.log('form submited',this.form.value);
    const formData:FormData = new FormData();
    formData.append('UserId','1');
    formData.append('Body',strippedMarkDown);
    formData.append('Title',this.form.get('title').value);
    formData.append('BodyMarkDown',this.form.get('content').value);
    formData.append('Image',this.image);
    this.postService.createPost(formData).subscribe(res=>console.log(res));
  }

  uploadImage($event) {
    const file = $event.target.files[0];
    this.image = file;
    console.log(this.image);
  }



  openSelectImageDialog() {
   const dialogRef = this.dialog.open(SelectImageDialogComponent,{
     height:'400px',
     width:'400px',
     data:'hello'
   });
   dialogRef.afterClosed().subscribe(result=>{
     this.el.nativeElement.value+="![]("+environment.apiUrl+'/'+result + ")";
   });
  }


}
