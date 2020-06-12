import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {ImageService} from "../../../../Core/Services/image/image.service";

@Component({
  selector: 'app-select-image-dialog',
  templateUrl: './select-image-dialog.component.html',
  styleUrls: ['./select-image-dialog.component.scss']
})
export class SelectImageDialogComponent{



  constructor(public dialogRef:MatDialogRef<SelectImageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data : string,private imageService:ImageService) { }



  onNoClick() {
    this.dialogRef.close();
  }





  uploadImage($event) {
    const file = $event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('file',file);
    this.imageService.postImage(formData).subscribe(res=>{
      console.log('result is',res);
      this.data = res.imageUrl;
    });
  }



}
