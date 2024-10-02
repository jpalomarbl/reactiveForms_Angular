import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

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
  submitTry: boolean = false;

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

  birthdate: FormControl = new FormControl(formatDate(this.user.birthdate, 'dd-MM-yyyy', 'en'), [
    Validators.required,
  ]);

  signInForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: this.email,
      password: this.password,
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      alias: this.alias,
      birthdate: this.birthdate 
    });
  }

  checkLogin(): void {
    this.submitTry = true;

    if (this.signInForm.valid) {
      this.user.email = this.email.value;
      this.user.password = this.password.value;
      this.user.name = this.name.value;
      this.user.surname1 = this.surname1.value;
      this.user.surname2 = this.surname2.value;
      this.user.alias = this.alias.value;
      this.user.birthdate = this.birthdate.value;

      console.log(
        'User: ',
        this.user.email,
        '\nPassword: ',
        this.user.password,
        '\nName: ',
        this.user.name,
        '\Surname1: ',
        this.user.surname1,
        '\nSurname2: ',
        this.user.surname2,
        '\nAlias: ',
        this.user.alias,
        '\nBirthdate: ',
        formatDate(this.user.birthdate, 'dd-MM-yyyy', 'en')
      );
    } else {
      console.log('FORM IS INVALID!!!');
    }
  }
}
