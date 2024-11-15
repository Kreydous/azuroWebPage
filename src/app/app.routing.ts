import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes =[
    { path: '', component:LandingPageComponent},
    { path: '/:section', component:LandingPageComponent},
    { path: 'product',                component: ProductComponent },
    { path: 'cart',          component: ShoppingCartComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
