import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent,LoginPageComponent,LoginLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assinatura-Digital';
}
