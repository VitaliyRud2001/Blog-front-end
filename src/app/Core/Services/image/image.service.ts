import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IImage} from "../../Models/image";
import {imageUrl} from "../../../Configs/enpoints";

@Injectable({
  providedIn: 'root'
})
export class ImageService {



  constructor(private httpClient: HttpClient) { }

  postImage(image:FormData):Observable<IImage>{
    return this.httpClient.post<IImage>(imageUrl,image);
  }

}
