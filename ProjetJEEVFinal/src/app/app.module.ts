import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './task/task.component';
import { AnnonceComponent } from './annonce/annonce.component';

const appRoutes:Routes=[
  {path: "login", component:LoginComponent},
  {path: "tasks", component: TaskComponent},
  {path:"", redirectTo:"/login", pathMatch: "full"}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
