import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*Routes*/
import { AppRoutes } from './routes/app-routes';

/*Components*/
import { LoginComponent } from './components/Login/LoginComponent';
import { UserComponent } from './components/Users/UserComponent';
import { AppComponent } from './app.component';

/*Services*/
import { LoginService } from './services/LoginService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
