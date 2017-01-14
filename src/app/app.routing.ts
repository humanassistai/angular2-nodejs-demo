import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent } from './login/login.component';
import {MyAlbumComponent } from './my-album/my-album.component';
import {AddPhotoComponent}from './add-photo/add-photo.component';
import {ImageDetailComponent}from './image-detail/image-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
   path: 'login',
   component: LoginComponent
 },
 {
  path: 'my-album',
  component: MyAlbumComponent
},
{
   path: 'add-photo',
   component: AddPhotoComponent
 },
 {
   path: 'image-detail/:id',
   component: ImageDetailComponent
 }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
