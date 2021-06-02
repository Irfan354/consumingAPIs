import { Component, OnInit } from '@angular/core';
import { ApidataserviceService } from '../apidataservice.service';
import{Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[];

  constructor(public data1:ApidataserviceService , private rt:Router) { }

  ngOnInit(): void {
    this.data1.getusers().subscribe(data=>{this.users=data})
  }

getUsersData(id:any){
    //navigate to userdetails component
  
    this.rt.navigateByUrl('userdetails/'+id)
  }
}
