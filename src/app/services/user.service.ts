import {User} from '../models/user';
import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {
  users: User[];

  constructor (private http: Http) {}

  getUsers() {
  }

  getUserById(id: string) {
  }

  getUserByName(username: string) {
    let tokenUrl = "http://192.99.172.172:9002/api/username";
    let headers = new Headers({'Authorization': JSON.parse(window.localStorage.getItem("token")).token});
    return this.http.post(tokenUrl, username, {headers: headers});
  }

  updateUser(user: User) {
    let tokenUrl1 = "http://192.99.172.172:9002/api/user/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

}
