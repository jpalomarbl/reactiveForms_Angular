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
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: UserDTO = new UserDTO('','', '', '', '', '', new Date());

  email: FormControl = new FormControl(this.user.email, [
    Validators.required,
    checkInvalidKeyWord(/fakeEmail@email.net/)
  ]);

  password: FormControl = new FormControl(this.user.password, [
    Validators.required,
    Validators.minLength(8)
  ]);

  name: FormControl = new FormControl(this.user.name, [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(25)
  ]);

  surname1: FormControl = new FormControl(this.user.surname1, [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(25)
  ]);

  surname2: FormControl = new FormControl(this.user.surname2, [
    Validators.minLength(5),
    Validators.maxLength(25)
  ]);

  alias: FormControl = new FormControl(this.user.alias, [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(25)
  ]);

  birthdate: FormControl = new FormControl(this.user.birthdate, [
    Validators.required,
  ]);
}
