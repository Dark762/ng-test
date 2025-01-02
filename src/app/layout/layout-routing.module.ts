import { Routes } from '@angular/router';
import { LayoutLoginComponent } from './components/layout-login/layout-login.component';
import { LoginComponent } from '../features/public/identity/components/login/login.component';
import { LayoutHomeComponent } from './components/layout-home/layout-home.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LayoutLoginComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    },{
        path:"private",
        component: LayoutHomeComponent,
        children:[
            {
                path:"main",
                loadChildren: () => import('../features/private/main/main.module').then(m => m.MainModule)
            },
            {
                path:"administration",
                loadChildren: () => import('../features/private/administration/administration.module').then(m => m.AdministrationModule)
            },
        ]
    }
];