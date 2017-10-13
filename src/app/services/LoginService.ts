import { Injectable}      from '@angular/core';
import { CanActivate } from '@angular/router';
//
import { BaseService } from './BaseService';

@Injectable()
export class LoginService extends BaseService implements CanActivate{
    private isActive : boolean = false;
    canActivate() :boolean {
        return this.isActive;
    }
}