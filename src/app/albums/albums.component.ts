import { Component, OnInit } from '@angular/core';
import { ApidataserviceService } from '../apidataservice.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:any=[]

  constructor(public data: ApidataserviceService) { }

  ngOnInit(): void {
    this.data.getalbums().subscribe(data=>{this.albums=data})
  }

}
