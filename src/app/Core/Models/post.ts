import {ITag} from "./tag";
import {IUser} from "./user";

export interface IPost {
  id:number;
  title:string;
  body:string;
  bodyMarkDown:string;
  imagePath?:string;
  createdDate:Date;
  tags:ITag[];
  user:IUser;
}
