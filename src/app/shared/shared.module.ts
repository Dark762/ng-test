import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as shared from './index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    shared.NgBootstrapModule
  ]
})
export class SharedModule { }
