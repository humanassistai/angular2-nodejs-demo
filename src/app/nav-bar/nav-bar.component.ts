import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  myLocalStorage;

  constructor (private loginService:LoginService) {
    this.myLocalStorage=localStorage;
  }


  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

  ngOnInit() {
  }

}
