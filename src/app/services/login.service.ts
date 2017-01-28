import {Injectable} from "@angular/core";
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;

  constructor (private http: Http) {}

  sendCredential(model) {
    let tokenUrl1 = "http://192.99.172.172:9002/api/authenticate";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
  }

  sendToken(token) {
    let tokenUrl2 = "http://192.99.172.172:9002/api/users";
    console.log('Bearer '+token);

    // let getHeaders = new Headers({'Authorization':'Bearer '+token});
     let getHeaders = new Headers({'Authorization':token});
    return this.http.get(tokenUrl2, {headers: getHeaders})
  }

  logout() {
    localStorage.setItem("token","");
    localStorage.setItem("currentUserName", '');
    alert("You just logged out.");
  }

  checkLogin() {
    if (localStorage.getItem("currentUserName")!=null && localStorage.getItem("currentUserName")!='' && localStorage.getItem("token")!=null && localStorage.getItem("token")!='') {
      // console.log(localStorage.getItem("currentUserName"));
      // console.log(localStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }

}