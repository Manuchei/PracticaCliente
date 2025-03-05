import { Routes } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: ProductListComponent },
    { path: 'product/:_id', component: ProductViewComponent },
    { path: '**', component: Page404Component },
]
