import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as component from './index'
import { routes } from './layout-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    component.FooterComponent,
    component.HeaderComponent,
    component.LayoutHomeComponent,
    component.LayoutLoginComponent,
    component.MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule  

  ],
  exports:[
    component.LayoutHomeComponent,
    component.LayoutLoginComponent
  ]
})
export class LayoutModule { }
