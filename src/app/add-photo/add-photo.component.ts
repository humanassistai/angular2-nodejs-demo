import { Component, OnInit } from '@angular/core';
import {Photo} from '../models/photo';
import {UploadPhotoService} from '../services/upload-photo.service';
import {AddPhotoService} from '../services/add-photo.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';


@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user: User;
  photoId :any;
  filesToUpload: Array<File>;


  constructor (private uploadPhotoService:UploadPhotoService, private addPhotoService: AddPhotoService, private userService:UserService) {
    this.filesToUpload = [];
    this.photoId ="";
  }

  onSubmit() {
    // console.log("dfgdfg", this.photoId);
    this.newPhoto.photoId = this.photoId;
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);

        this.newPhoto.user = this.user;
        this.addPhotoService.sendPhoto(this.newPhoto)
        .subscribe(
          data => {
            this.photoAdded = true;
            this.newPhoto = new Photo();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
  upload() {
      this.makeFileRequest("http://192.99.172.172:9002/api/photo/upload", [], this.filesToUpload).then((result) => {
          // console.log(result, "result data");
           this.photoId = result;
      }, (error) => {
          console.error(error, "fdgfhfhfgh");
      });
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
      return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          for(var i = 0; i < files.length; i++) {
              formData.append("uploads[]", files[i], files[i].name);
          }
          xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      resolve(xhr.response);
                  } else {
                      reject(xhr.response);
                  }
              }
          }
          xhr.open("POST", url, true);
          xhr.setRequestHeader("Authorization",  JSON.parse(window.localStorage.getItem("token")).token);
          xhr.send(formData);
      });
  }
  ngOnInit() {
  }

}
