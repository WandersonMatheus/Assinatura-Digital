import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-layout',
  imports: [],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent implements OnInit {
username: string = "";

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username") ?? "";
  }

}
