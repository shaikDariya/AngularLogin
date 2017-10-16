import { Injectable}      from '@angular/core';
import { CanActivate } from '@angular/router';

//
import { BaseService } from './BaseService';
import { User } from '../declarations/User';
@Injectable()
export class LoginService extends BaseService implements CanActivate{
    private isActive : boolean = false;
    private loggedUser : User;
    canActivate() :boolean {
        return this.isActive;
    }

    loggedInUser(user : User){
    	this.loggedUser = user;
    	this.isActive = true;
    }
    getLoggedUser() : String{
    	return this.loggedUser.userName;
    }

    loggout() : void{
    	this.isActive = false;
    	this.loggedUser = new User();
    }

}