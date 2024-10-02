import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';


export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'sign-in',
        component: SignInComponent
    }
];
