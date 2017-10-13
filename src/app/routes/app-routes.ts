import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*Components */
import { LoginComponent } from '../components/Login/LoginComponent';
import { UserComponent } from '../components/Users/UserComponent';

import { LoginService } from '../services/LoginService';

const appRoutes : Routes = [
    { path : 'login', component : LoginComponent },
    { path : 'users', component : UserComponent , canActivate: [LoginService]},
    { path : '**', redirectTo: '/login'},
    { path : '', redirectTo: '/login', pathMatch: 'full' }
]


@NgModule({
    imports : [ RouterModule.forRoot(appRoutes)] ,
    exports : [RouterModule]
})

export class AppRoutes{};