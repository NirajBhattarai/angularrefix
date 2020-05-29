import { Component, OnInit,ViewChild } from '@angular/core';
import { UserModel } from './Register';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message:String;
  @ViewChild("heroForm") register:NgForm;

  @ViewChild("password") password:any;
  
  user:UserModel= new UserModel();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
  console.log(this.register)
  this.user.email=this.register.value.email;
  this.user.password=this.register.value.password;
  this.user.confirmPassword=this.register.value.confirmPassword;
  this.authService.registerUser(this.user); 
  }

}
