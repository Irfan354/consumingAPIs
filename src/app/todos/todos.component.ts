import { Component, OnInit } from '@angular/core';
import { ApidataserviceService } from '../apidataservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:any=[];
  constructor(public data:ApidataserviceService) { }

  ngOnInit(): void {
    this.data.gettodos().subscribe(data=>{this.todos=data})
  }

}
