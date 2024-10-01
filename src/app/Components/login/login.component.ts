import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserDTO } from '../../Models/user.dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: UserDTO = new UserDTO('','');

  email: FormControl = new FormControl(this.user.email);
  password: FormControl = new FormControl(this.user.password);
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  checkLogin(): void {
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    console.log(
      'User: ',
      this.user.email,
      '\nPassword: ',
      this.user.password
    );
  }
}
