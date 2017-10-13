import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { User } from '../../declarations/User';
import { LoginService } from '../../services/LoginService';



@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
    private user : User; 
    private loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private loginService :LoginService){
      this.user = new User();
      this.loginForm = this.formBuilder.group({
            userName : [ this.user.userName, [Validators.required]], 
            passWord : [ this.user.passWord, [Validators.required, this.isDuplicateName]]
        })
      this.loginForm.valueChanges.subscribe( data => console.log(this.loginForm.controls.passWord));
  } 

  login():void{
      console.log(this.loginForm.controls.passWord, this.loginForm);
      if(this.userValidate()){
          
      };
  }

  isDuplicateName(control : FormControl ){
      if(control.dirty){
          if(control.value != '123456'){
             return { notmatch : true}
          }
      }      
  }

  userValidate() : boolean{
      for(let pro in this.loginForm.controls){
          this.loginForm.controls[pro].markAsDirty();
      }
      if(this.loginForm.valid){
           if(this.loginForm.controls.passWord.value === '123456'){
               return true;
           }else{
               return false;        
           };
      }else{
          return false;
      }
  }
  
}
