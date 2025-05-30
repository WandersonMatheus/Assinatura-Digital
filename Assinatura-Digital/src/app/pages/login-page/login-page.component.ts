import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';
import { PrimaryinputComponent } from '../../components/primaryinput/primaryinput.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginLayoutComponent,PrimaryinputComponent,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password:new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }


}
