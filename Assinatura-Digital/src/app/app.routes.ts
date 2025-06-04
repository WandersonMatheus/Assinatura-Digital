import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services/auth-guard.service';


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
        path:"Home",
        component:HomeComponent,
        canActivate:[AuthGuard]
    }
];
