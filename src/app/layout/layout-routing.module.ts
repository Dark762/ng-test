import { Routes } from '@angular/router';
import { LayoutLoginComponent } from './components/layout-login/layout-login.component';
import { LoginComponent } from '../features/public/identity/components/login/login.component';
import { LayoutHomeComponent } from './components/layout-home/layout-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'auth',
        component: LayoutLoginComponent,
        children: [
            {
                path: "",
                loadChildren: () => import('../features/public/identity/identity.module').then(m => m.IdentityModule)
            },
        ]
    },
    {
        path: "private",
        component: LayoutHomeComponent,
        children: [
            {
                path: "main",
                loadChildren: () => import('../features/private/main/main.module').then(m => m.MainModule)
            },
            {
                path: "administration",
                loadChildren: () => import('../features/private/administration/administration.module').then(m => m.AdministrationModule)
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];