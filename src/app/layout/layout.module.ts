import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as component from './index'



@NgModule({
  declarations: [
    component.FooterComponent,
    component.HeaderComponent,
    component.LayoutHomeComponent,
    component.LayoutLoginComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    component.FooterComponent,
    component.HeaderComponent,
    component.LayoutHomeComponent,
    component.LayoutLoginComponent
  ]
})
export class LayoutModule { }
