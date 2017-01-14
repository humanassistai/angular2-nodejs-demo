import {Comment} from './comment';
import {User} from './user';
export class Photo{
  public photoId:any;
  public photoName:string;
  public title:string;
  public user:User;
  public ImageName:string;
  public likedByUserList:User[];
  public likes:number;
  public commentList:Comment[];
  public created:Date;
}
