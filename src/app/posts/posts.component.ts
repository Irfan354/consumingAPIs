import { Component, OnInit } from '@angular/core';
import {ApidataserviceService } from '../apidataservice.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any=[];
  constructor(private data : ApidataserviceService) { }

  ngOnInit(): void { 
    this.data.getposts().subscribe(data=>{this.posts=data})
  }

}
