import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './identity-routing.module';
import * as layout from '../../../layout/index';
import { CallBackComponent } from './components/call-back/call-back.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LoginComponent, CallBackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule  
  ]
})
export class IdentityModule { }
