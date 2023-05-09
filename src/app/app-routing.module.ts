import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {
        path: 'splash',
        loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashModule),
    },
    {
        path: 'info',
        loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule),
    },
    {
        path: 'map',
        loadChildren: () => import('./pages/map/map.module').then(m => m.MapModule),
    },
    {
        path: 'trains',
        loadChildren: () => import('./pages/trains/trains.module').then(m => m.TrainsModule),
    },
    {
        path: 'not-found',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
    },
    {
        path: '',
        redirectTo: 'splash',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
