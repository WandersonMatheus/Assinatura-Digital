import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FunctionsComponent } from "../../components/functions/functions.component";
import { ListcenaComponent } from "../../components/listcena/listcena.component";
import { ListclientsComponent } from "../../components/listclients/listclients.component";

@Component({
  selector: 'app-home-layout',
  imports: [FunctionsComponent, ListcenaComponent, ListclientsComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent implements OnInit {
username: string = "";

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username") ?? "";
  }

}
