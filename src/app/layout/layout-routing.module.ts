import { Routes } from '@angular/router';
import { LayoutLoginComponent } from './components/layout-login/layout-login.component';
import { LoginComponent } from '../features/public/identity/components/login/login.component';
import { LayoutHomeComponent } from './components/layout-home/layout-home.component';
import { HomeComponent } from '../features/private/main/components/home/home.component';

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
                path:"home",
                component : HomeComponent
            }
        ]
    }
];