import { Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component'; 
import { Error404Component } from './shared/error404/error404.component';


export const routes: Routes = [
    {
        path: '', component : HomeComponent
    },
    {
        path: 'login', component : LoginComponent 
    },
    {
        path: 'forbidden', component : ForbiddenComponent
    },
    {
        path: '**', component : Error404Component
    }
];