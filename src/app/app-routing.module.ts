import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ApisComponent } from './apis/apis.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { Bootstrap4Component } from './bootstrap4/bootstrap4.component';
import { Bootstrap5Component } from './bootstrap5/bootstrap5.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TodosComponent } from './todos/todos.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"apis",component:ApisComponent,children:[
   {path:"posts",component:PostsComponent}, 
   {path:"photos",component:PhotosComponent},
   {path:"albums",component:AlbumsComponent},
   {path:"users",component:UsersComponent},
   {path:"userdetails/:id",component:UserdetailsComponent},
   {path:"todos", component:TodosComponent},
  ]},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"apis",component:ApisComponent},
  {path:"technologies",component:TechnologiesComponent,children:[
       {path:"bootstrap",component:BootstrapComponent,children:[
         {path:"bootstrap4",component:Bootstrap4Component},
         {path:"bootstrap5",component:Bootstrap5Component}
       ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
