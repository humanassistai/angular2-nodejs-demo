import { Component, OnInit } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private model = {'username':'', 'password':''};
 private currentUserName;

 constructor (private loginService: LoginService){
   this.currentUserName=localStorage.getItem("currentUserName");
 }

  ngOnInit() {
  }
  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
                this.loginService.sendToken(JSON.parse(window.localStorage.getItem("token")).token).subscribe(
                  data => {
                            this.currentUserName=this.model.username;
                            localStorage.setItem("currentUserName", this.model.username);
                            this.model.username='';
                            this.model.password='';
                          },
                  error => console.log(error)
                );
              },
      error => {
        alert(JSON.parse(error._body).message);
        console.log(error._body);
        }
    );

  }


}
