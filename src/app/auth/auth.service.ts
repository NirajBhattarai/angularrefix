import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './register/Register';
import { Subject } from 'rxjs';
import { LoginModal } from './login/LoginModal'

@Injectable({providedIn : 'root'})

export class AuthService{

    error:Subject<string>;
    

    constructor(private http:HttpClient)
    {

    }
    registerUser(userModel:UserModel)
    {
        console.log(userModel.email);
        console.log(userModel.password);        
        console.log(userModel.confirmPassword)
     return this.http.post("https://consumer-dev.refirx.com/api/api/v1/register",userModel);
    }
    
    login(loginModel:LoginModal)
    {
      console.log(loginModel.email);
      console.log(loginModel.password)
       this.http.
      post<LoginObject>("https://consumer-dev.refirx.com/api/api/v1/login",loginModel);
    }

}

interface LoginObject{
  message:string;
  token:string
}