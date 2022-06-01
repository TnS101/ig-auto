import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy{
 users: User[] = [];
 private usersSub = new Subscription();
 constructor(public userService: UserService){}

  ngOnInit(){
    this.users = this.userService.getUsers();
    this.usersSub = this.userService.getUserUpdatedListener().subscribe((users: User[]) => {
        this.users = users;
    });
  }

  ngOnDestroy(){
    this.usersSub.unsubscribe();
  }
}
