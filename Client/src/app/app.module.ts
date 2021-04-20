import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NameComponent } from './inputs/name/name.component';
import { RoleComponent } from './inputs/role/role.component';
import { EmailComponent } from './inputs/email/email.component';
import { PasswordComponent } from './inputs/password/password.component';
import { SubmitComponent } from './buttons/submit/submit.component';
import { DemoComponent } from './buttons/demo/demo.component';
import { EmailLoginComponent } from './inputs/email-login/email-login.component';
import { PasswordLoginComponent } from './inputs/password-login/password-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NameComponent,
    RoleComponent,
    EmailComponent,
    PasswordComponent,
    SubmitComponent,
    DemoComponent,
    EmailLoginComponent,
    PasswordLoginComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
