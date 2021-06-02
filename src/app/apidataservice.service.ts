import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataserviceService {

constructor(public data : HttpClient){}
getposts():Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/posts")
}
getphotos():Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/photos")
}
getalbums():Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/albums")
}
getusers():Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/users")
}
getuserdetails(id:any):Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/users/"+id)
}
gettodos():Observable<[]>{
  return this.data.get<[]>("https://jsonplaceholder.typicode.com/todos")
}
}
