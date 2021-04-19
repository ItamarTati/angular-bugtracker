import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component'


const routes: Routes = [
  {path: '',  component: RegisterComponent},
  {path: 'login',  component: LoginComponent, data: { animation: 'isLeft' }}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
