import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators,FormBuilder, FormControl, Form} from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserModel } from '../register/Register';


@Component({
  selector: 'app-registerwithreactive',
  templateUrl: './registerwithreactive.component.html',
  styleUrls: ['./registerwithreactive.component.css']
})
export class RegisterwithreactiveComponent implements OnInit {


  message:string="no error";
  isError:boolean=false;
  userModel:UserModel=new UserModel();
  registerForm:FormGroup=   this.formbuilder.group({});

    constructor(private formbuilder:FormBuilder
      ,private authService:AuthService) { 
        console.log("constructor")
      
    }

  ngOnInit() {
    console.log("ngOnInit")
   this.registerForm = this.formbuilder.group({
    email:['',Validators.email],//new FormControl('',[Validators.required,Validators.email]),
    password:['',Validators.required],//new FormControl(''),
    confirmPassword:['',[Validators.required,this.ValidateFirstName.bind(this)]]//new FormControl('')     
    });
  }
    


   onSubmit()
  {
    this.userModel.email=this.registerForm.value.email;
    this.userModel.password= this.registerForm.value.password;
    this.userModel.confirmPassword=this.registerForm.value.confirmPassword;
    this.authService.registerUser(this.userModel).subscribe(response=>{
      console.log(response);

    },(error) => {
      const msgData = {
        type: 'error',
        msg: error.error.message,
      };
      console.log(msgData);
     this.message="message changed"
     this.isError=true;
        
      });
  }

   public  ValidateFirstName(control: AbstractControl):{[s:string]:boolean} {

    if(control.value!==this.registerForm.value.password){
     return {'password':true}
    }
       return null;
  }
}
