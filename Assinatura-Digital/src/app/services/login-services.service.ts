import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { ValueChangeEvent } from '@angular/forms';
import { Token } from '@angular/compiler';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private httpClient: HttpClient) { }

  login(name:string,password:string){
    return this.httpClient.post<LoginResponse>("/login",{name,password}).pipe(
        tap((value)=>{
              sessionStorage.setItem("auth-Token",value.token)
              sessionStorage.setItem("username",value.nome)
            })
    )
  }
}
