import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = {};
  constructor(public authService: AuthenticationService, private router:Router) { }

  //quand le component est chargé --> ngOnInit()-> va exécuter
  ngOnInit(): void {
    //par défaut :
    this.authService.getTasks()
      .subscribe(data =>{
        this.tasks = data;
      }, error => {
        this.authService.logout();
        this.router.navigateByUrl("/login");
      })
  }
  onNewTask(){
    this.router.navigateByUrl('/new-task');
  }

}
