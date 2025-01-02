import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from './components/adm/adm.component';
import { RouterModule } from '@angular/router';
import { routes } from './administration-routing.module';



@NgModule({
  declarations: [AdmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministrationModule { }
