import { Component } from '@angular/core';
import { LoginService } from '../../services/LoginService';
import{ Router } from '@angular/router';

@Component({
  templateUrl: './user.html'
})
export class UserComponent {
	private userName : String;
  	constructor(private loginService : LoginService, private router : Router){
  		this.userName = this.loginService.getLoggedUser();
  	}

  	logout() : void{
  		this.loginService.loggout();
  		this.router.navigate(['/login']);
  	}
}
