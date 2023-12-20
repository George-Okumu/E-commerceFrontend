import { Routes } from '@angular/router';

import { ProductViewComponent } from './component/product-view/product-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';

import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
   
    {
        path:'',title: 'Product View Page',component: ProductViewComponent
    },
    {
        path:'product-detail/:productid',title: 'Product Detail Page',component: ProductDetailComponent
    },
    {
        path:'cart-page',title: 'Cart Page',component: CartPageComponent
    },
    {
        path:'order-page',title: 'Order-Page',component: OrderPageComponent
    },
    {
        path: 'not-found', // Define a route for the not-found component
        title: 'Not Found',
        component: NotFoundComponent
      },
      {
        path: '**', // Wildcard route for any other unknown route
        redirectTo: '/not-found', // Redirect to the not-found page
        pathMatch: 'full'
      }
    
    
    
];
