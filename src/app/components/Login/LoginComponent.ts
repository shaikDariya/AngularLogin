import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import{ Router } from '@angular/router';
import { User } from '../../declarations/User';
import { LoginService } from '../../services/LoginService';
 
 
 
@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
 
export class LoginComponent {
    private user : User;
    private loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder , private loginService :LoginService, private router :Router){
      this.user = new User();
      this.loginForm = this.formBuilder.group({
            userName : [ this.user.userName, [Validators.required]],
            passWord : [ this.user.passWord, [Validators.required]]
        })
  }
 
  login():void{
      if(this.userValidate()){
          this.user = this.prepareUser();
          this.loginService.loggedInUser(this.user);
          this.router.navigate(['/users'])
      };
  }
 
  userValidate() : boolean{
      for(let pro in this.loginForm.controls){
          this.loginForm.controls[pro].markAsDirty();
      }
      if(this.loginForm.valid){
           if(this.loginForm.controls.passWord.value === '123456'){
               return true;
           }else{
               alert('PassWord is Not Match');
               return false;       
           };
      }else{
          return false;
      }
  }
  prepareUser(): User {
      return {
          userName : this.loginForm.controls.userName.value,
          passWord : this.loginForm.controls.passWord.value
      }
  }
 
}