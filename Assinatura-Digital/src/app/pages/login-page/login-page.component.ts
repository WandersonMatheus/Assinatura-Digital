import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../layout/login-layout/login-layout.component';
import { PrimaryinputComponent } from '../../components/primaryinput/primaryinput.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginLayoutComponent,PrimaryinputComponent,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
