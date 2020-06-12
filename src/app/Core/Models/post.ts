import {ITag} from "./tag";
import {IUser} from "./user";

export interface IPost {
  Id:number;
  Title:string;
  Body:string;
  BodyMarkDown:string;
  ImagePath?:string;
  CreatedDate:Date;
  Tags:ITag[];
  User:IUser;
}
