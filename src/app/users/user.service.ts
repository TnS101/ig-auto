import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();

  getUsers(){
    return [...this.users];
  }

  getUserUpdatedListener(){
    return this.usersUpdated.asObservable();
  }

  addUser(username: string, password: string){
    this.users.push({username: username, password: password});
    this.usersUpdated.next([...this.users]);
  }
}
