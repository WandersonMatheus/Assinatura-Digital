import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { ClienteRegisterComponent } from './pages/cliente-register/cliente-register.component';


export const routes: Routes = [
    {
        path:"login",
        component:LoginPageComponent
    },
    {
        path:"Cadastro",
        component:SignupComponent
    },
    {
        path:"home",
        component:HomeComponent,
        canActivate:[AuthGuard]
    },
    {
        path:"clientRegister",
        component:ClienteRegisterComponent
    }
];
