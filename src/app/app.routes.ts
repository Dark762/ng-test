import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', loadChildren : () => import('./features/login/login.module').then(m => m.LoginModule)},
    {path: 'login', loadChildren : () => import('./features/home/home.module').then(m => m.HomeModule)}
];
