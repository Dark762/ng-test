import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    }
];
