import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { Bootstrap4Component } from './bootstrap4/bootstrap4.component';
import { Bootstrap5Component } from './bootstrap5/bootstrap5.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ApisComponent } from './apis/apis.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodosComponent,
    PhotosComponent,
    AlbumsComponent,
    UsersComponent,
    BootstrapComponent,
    Bootstrap4Component,
    Bootstrap5Component,
    TechnologiesComponent,
    RegisterComponent,
    LoginComponent,
    UserdetailsComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
