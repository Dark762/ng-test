import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallBackComponent } from './components/call-back/call-back.component';

export const routes: Routes = [
    {path: '', component : LoginComponent},
    { path: 'callback', component: CallBackComponent }
];