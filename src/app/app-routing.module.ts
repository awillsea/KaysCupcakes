import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutme/about-me.component';
import { CustomerOrdersComponent } from './customOrders/customer-orders.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FaqComponent } from './faq/faq.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'navbar', component: AppComponent },
  { path: 'home', component:HomeComponent},
  { path: 'aboutme', component: AboutMeComponent},
  { path: 'customOrders', component:CustomerOrdersComponent},
  { path: 'shop', component:ShopComponent},
  { path: 'cart', component:CartComponent},
  { path: 'testimony', component:TestimonyComponent},
  { path: 'faq', component:FaqComponent},
  { path: 'cupcakes', component:CupcakesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }