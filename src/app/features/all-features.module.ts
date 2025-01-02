import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromFeatures from './index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    fromFeatures.MainModule,
    fromFeatures.LoginModule,
    fromFeatures.AdministrationModule
  ]
})
export class AllFeaturesModule { }
