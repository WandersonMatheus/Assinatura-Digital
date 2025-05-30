import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';
import { PrimaryinputComponent } from '../../components/primaryinput/primaryinput.component';
import { Router } from '@angular/router';
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginLayoutComponent,ReactiveFormsModule, PrimaryinputComponent],
  providers: [LoginServicesService],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm!: FormGroup;

  constructor(
    private router:Router,
    private loginService:LoginServicesService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  submit(){
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe({
      next:()=> console.log("sucesso"),
      error:()=> console.log("error")
    })
  }
  navigate(){
    this.router.navigate(["registrar"]);
  }
}
