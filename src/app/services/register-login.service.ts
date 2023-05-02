import { Injectable } from '@angular/core';
import { User } from "../injecao-login/injecao-login.component";

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  constructor() {}

  register(user: User) {
    let users = new Array<User>();
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users") as string);
     }
     users.push(user);
     localStorage.setItem("users", JSON.stringify(users));
  }
}
