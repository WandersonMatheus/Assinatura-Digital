import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';


export const routes: Routes = [
    {
        path:"login",
        component:LoginPageComponent
    },
    {
        path:"Cadastro",
        component:SignupComponent
    },
];
