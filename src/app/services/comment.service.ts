import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {

  constructor (private http:Http) {}

  addComment(comment: Comment) {
    let tokenUrl1 = "http://192.99.172.172:9002/api/comment/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':JSON.parse(window.localStorage.getItem("token")).token});
    console.log(JSON.stringify(comment));
    return this.http.post(tokenUrl1, JSON.stringify(comment), {headers: headers1});
  }
}
