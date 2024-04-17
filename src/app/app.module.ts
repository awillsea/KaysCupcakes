import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './aboutme/about-me.component';
import { CustomerOrdersComponent } from './customOrders/customer-orders.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FaqComponent } from './faq/faq.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    CustomerOrdersComponent,
    ShopComponent,
    CartComponent,
    PhotogalleryComponent,
    TestimonyComponent,
    FaqComponent,
    CupcakesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
