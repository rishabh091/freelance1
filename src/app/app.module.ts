import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import {MatListModule} from '@angular/material/list';
import { ZonesComponent } from './zones/zones.component';
import { TableComponent } from './table/table.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './signup/address/address.component';
import { PaymentComponent } from './signup/payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { StaffComponent } from './staff/staff.component';
import { ToasterComponent } from './toaster/toaster.component';
import { DetailsComponent } from './signup/details/details.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { QRCodeModule } from 'angularx-qrcode';
import { ShowSubcategoryComponent } from './show-menu/show-subcategory/show-subcategory.component';
import { ShowProdsComponent } from './show-menu/show-prods/show-prods.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    NavbarComponent,
    ShowMenuComponent,
    AddMenuComponent,
    LoginComponent,
    SignupComponent,
    ZonesComponent,
    TableComponent,
    AddressComponent,
    PaymentComponent,
    ProfileComponent,
    AddCategoryComponent,
    StaffComponent,
    ToasterComponent,
    DetailsComponent,
    ShowSubcategoryComponent,
    ShowProdsComponent,
    AddOrderComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    ImageCropperModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
