import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    NavbarComponent,
    ShowMenuComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
