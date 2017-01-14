import { Component, OnInit } from '@angular/core';
import { PhotoService } from  '../services/photo.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos :Photo[];
  selectedPhoto :Photo;
  filteredPhotos : Photo[];
   pages : number = 4;
  pageSize : number = 2
   pageNumber : number = 0;
   currentIndex : number = 1;
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';
  constructor(private photoService:PhotoService, private router: Router) {

    this.photoService.getPhotos().subscribe(
      data => {
        this.filteredPhotos =JSON.parse(JSON.parse(JSON.stringify(data))._body),
        this.photos =JSON.parse(JSON.parse(JSON.stringify(data))._body),
        this.init();
      },
      error => console.log(error)
    );
    // this.photoService.getPhotos().subscribe(
    //   data => console.log(this.photos =JSON.parse(JSON.parse(JSON.stringify(data))._body)),
    //   error => console.log(error)
    // );
    this.init();

   }

   init(){
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;
    // console.log(this.photos);
    if(this.filteredPhotos){
           this.pageNumber = parseInt(""+ (this.filteredPhotos.length / this.pageSize));
           if(this.filteredPhotos.length % this.pageSize != 0){
              this.pageNumber ++;
           }
         }
         if(this.pageNumber  < this.pages){
              this.pages =  this.pageNumber;

        }
        this.refreshItems();
        console.log("this.pageNumber :  "+this.pageNumber);

         //
        //  if(this.pageNumber  < this.pages){
        //        this.pages =  this.pageNumber;
         //
        //  }

        //  this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }
   onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }
  FilterByName(){
    this.filteredPhotos = [];
    let photosList = this.photos;
    console.log("input", this.inputName);
     if(this.inputName != ""){
       this.photoService.getPhotos().subscribe(
         data => {
            let photoListSer = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            photoListSer.forEach(element => {
              console.log("elemnt",element.photoName.toUpperCase(),this.inputName.toUpperCase(), element.photoName.toUpperCase().indexOf(this.inputName.toUpperCase()) );
                if(element.photoName.toUpperCase().indexOf(this.inputName.toUpperCase())>=0 || element.title.toUpperCase().indexOf(this.inputName.toUpperCase())>=0 ){
                  this.filteredPhotos.push(element);
                     this.init();
               }
            })
         },
         error => console.log(error)
       );
           ;
     }else{
       this.photoService.getPhotos().subscribe(
         data => { this.filteredPhotos =JSON.parse(JSON.parse(JSON.stringify(data))._body)
              this.init();
         },
         error => console.log(error)
       );
        // this.filteredPhotos = photosList;
     }
    //  console.log(this.filteredPhotos);

   }
  refreshItems(){
    console.log(this.filteredPhotos, 'filteredPhotos');
         if( this.filteredPhotos){

               this.photos = this.filteredPhotos.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
               console.log("vddf", this.photos);
               this.pagesIndex =  this.fillArray();
             }
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
   prevPage(){
     if(this.currentIndex>1){
        this.currentIndex --;
     }
     if(this.currentIndex < this.pageStart){
        this.pageStart = this.currentIndex;

     }
     this.refreshItems();
  }
  nextPage(){
     if(this.currentIndex < this.pageNumber){
           this.currentIndex ++;
     }
     if(this.currentIndex >= (this.pageStart + this.pages)){
        this.pageStart = this.currentIndex - this.pages + 1;
     }

     this.refreshItems();
  }
   setPage(index : number){
        this.currentIndex = index;
        this.refreshItems();
   }
  ngOnInit() {
  }

}
