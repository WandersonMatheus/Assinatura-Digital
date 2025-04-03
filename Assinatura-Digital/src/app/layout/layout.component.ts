import { Component } from '@angular/core';
import { HeaderComponent } from '../templates/header/header.component';
import { FooterComponent } from '../templates/footer/footer.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
