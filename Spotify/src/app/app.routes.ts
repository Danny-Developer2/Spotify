import { Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./_modules/autch/autch.module').then(m => m.AutchModule) //TODO: refefrence a http://local:40200/   
    }, 
    {
        path: '',
        component: HomePageComponent,
        loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule) //TODO: refefrence a http://local:40200/   
    }, 
    {
        path: '**',
        redirectTo: 'home'
    }
];
