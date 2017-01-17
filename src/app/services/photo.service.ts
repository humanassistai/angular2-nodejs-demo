import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { URLSearchParams } from '@angular/http'
import {User} from '../models/user';
import { ListResult } from './api/list-result.interface'

@Injectable()
export class PhotoService {

  constructor (private http:Http){}

  getPhotos() {
    let url = "http://192.99.172.172:9000/api/photo/allPhotos";
    return this.http.get(url);
  }

  getPhotoById (photoId: string) {
    let tokenUrl1 = "http://192.99.172.172:9000/api/photo/photoId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': JSON.parse(window.localStorage.getItem("token")).token});
    // return this.http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
    return this.http.post(tokenUrl1, JSON.stringify({photoId:photoId}),{headers: headers1});

  }

  getPhotoByIdComment (photoId: string, comment:any) {
    let tokenUrl1 = "http://192.99.172.172:9000/api/photo/photoId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': JSON.parse(window.localStorage.getItem("token")).token});
    // return this.http.post(tokenUrl1, JSON.stringify(photoId), {headers: headers1});
    return this.http.post(tokenUrl1, JSON.stringify({photoId:photoId}),{headers: headers1});

  }

  getPhotosByUser (user: User) {
    let tokenUrl1 = "http://192.99.172.172:9002/api/photo/user";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': JSON.parse(window.localStorage.getItem("token")).token});
    return this.http.post(tokenUrl1, JSON.stringify(user), {headers: headers1});
  }

  updatePhoto(photo: Photo) {
    let tokenUrl1 = "http://192.99.172.172:9002/api/photo/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization': JSON.parse(window.localStorage.getItem("token")).token});
    return this.http.post(tokenUrl1, JSON.stringify(photo), {headers: headers1});
  }

}
