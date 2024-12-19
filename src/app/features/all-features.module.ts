import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromFeatures from './index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    fromFeatures.HomeModule,
    fromFeatures.LoginModule
  ]
})
export class AllFeaturesModule { }
