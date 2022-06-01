import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

import { UserService } from "../user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent
{
  constructor(public userService: UserService){
    this.userService = userService;
  }
    loginUser(form: NgForm){
      if (!form.invalid) {
        this.userService.addUser(form.value.username, form.value.password);
      }
    }
}
