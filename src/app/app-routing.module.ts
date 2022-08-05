import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { SignupComponent } from './signup/signup.component';
import { ZonesComponent } from './zones/zones.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'showMenu', component: ShowMenuComponent },
  { path: 'addMenu', component: AddMenuComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'table/:zone', component: TableComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
