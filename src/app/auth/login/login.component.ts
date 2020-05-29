import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginModal } from './LoginModal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoginError = false;
  error = false;
  loginData: any = {};
  message: string;
  Submitted = false;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(public authService: AuthService,
    public formbuilder: FormBuilder,) { }

  ngOnInit(): void {
    sessionStorage.clear()
    this.loginForm=  this.formbuilder.group({
      email:['',Validators.required,Validators.email],
      password:['',]
    });
  }
  onSubmit()
  {
    this.authService
    .login(new LoginModal(this.loginForm.value.email,this.loginForm.value.password)); 
    
  }

}
