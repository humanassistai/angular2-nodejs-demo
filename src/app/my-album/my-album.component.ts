import { Component, OnInit, Input } from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {UserService} from '../services/user.service';
import {LoginService} from '../services/login.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Router} from '@angular/router';




@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent implements OnInit {
    private photos: Photo[];
    private user;
    private selectedPhoto: Photo;

    constructor (private photoService: PhotoService, private router: Router, private userService: UserService, private loginService:LoginService) {
      if (!this.loginService.checkLogin()) {
        alert('you must logged in !');
        window.history.back();
        return;
      }
      this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
        user => {
          // console.log("useer ==>", user);
          this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
          // console.log(this.user, 'fgdfg');
          this.photoService.getPhotosByUser(this.user).subscribe(
            photos => {
             console.log("photos ==>", photos);
              console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(photos))._body));
            },
            error => console.log(error)
          );
        },
        error => console.log(error)
      );
    }

    onSelect(photo:Photo) {
      this.selectedPhoto = photo;
      this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);

    }

  ngOnInit() {
  }

}
