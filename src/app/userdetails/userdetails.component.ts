import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidataserviceService } from '../apidataservice.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

 
  constructor(private ar:ActivatedRoute, private ds:ApidataserviceService) {
    
  }


  usersobj:any;

  ngOnInit():void {
   this.ar.paramMap.subscribe(
     data=>
     {
      this.ds.getuserdetails(data.get("id")).subscribe
       (
        res=>{
          this.usersobj=res;
        }
       )
     }
   )
  }

}
