import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginLayoutComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
