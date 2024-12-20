import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './login-routing.module';
import * as layout from '../../../layout/index';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
    layout.LayoutModule
  ]
})
export class LoginModule { }
