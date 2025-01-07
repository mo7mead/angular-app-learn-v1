import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    {
        path: 'about', component: AboutUSComponent, children: [
            { path: '', redirectTo: '/about/vision', pathMatch: 'full' },
            { path: 'vision', component: VisionComponent },
            { path: 'values', component: ValuesComponent },

        ],

    },
    { path: '**', component: NotFoundComponent }

];