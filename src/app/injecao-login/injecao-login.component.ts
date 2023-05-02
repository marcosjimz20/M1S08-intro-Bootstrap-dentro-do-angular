import { Component } from '@angular/core';
import { RegisterLoginService } from "../services/register-login.service";

@Component({
  selector: 'app-injecao-login',
  templateUrl: './injecao-login.component.html',
  styleUrls: ['./injecao-login.component.scss']
})
export class InjecaoLoginComponent {
  email = "";
  password = "";

  constructor(private registerLoginService: RegisterLoginService) {}

  registerUser() {
    const user = {
      email: this.email,
      password: this.password,
    };

    this.registerLoginService.register(user);

    this.email = "";
    this.password = "";
  }

}

export interface User {
  email: string;
  password: string;
}
