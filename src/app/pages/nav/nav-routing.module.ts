/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav.component';

const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('../splash/splash.module').then(m => m.SplashModule),
            },
            {
                path: 'info',
                loadChildren: () => import('../info/info.module').then(m => m.InfoModule),
            },
            {
                path: 'map',
                loadChildren: () => import('../map/map.module').then(m => m.MapModule),
            },
            {
                path: 'trains',
                loadChildren: () => import('../trains/trains.module').then(m => m.TrainsModule),
            },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NavRoutingModule { }*/