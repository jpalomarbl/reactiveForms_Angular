import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';

import { UserDTO } from '../../Models/user.dto';
import { checkInvalidKeyWord } from '../../Directives/check-invalid-keyword.validator';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: UserDTO = new UserDTO('','', '', '', '', '', new Date());

  email: FormControl = new FormControl(this.user.email, [
    Validators.required,
    checkInvalidKeyWord(/email@email.com/)
  ]);
  password: FormControl = new FormControl(this.user.password, [
    Validators.required,
    Validators.minLength(8)
  ]);
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
