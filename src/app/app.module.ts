import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import {PhotoService} from './services/photo.service';
import {RegisterService} from './services/register.service';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {CommentService} from './services/comment.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageCommentsComponent } from './image-comments/image-comments.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent,
    ImageDetailComponent,
    ImageCommentsComponent,
    PhotoRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService,
    UserService,
    AddPhotoService,
    UploadPhotoService,
    CommentService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
