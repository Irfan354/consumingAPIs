import { Component, OnInit } from '@angular/core';
import {ApidataserviceService} from '../apidataservice.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any=[];

  constructor(public data : ApidataserviceService) { }

  ngOnInit(): void {
    this.data.getphotos().subscribe(data=>{this.photos=data})
  }

}
