import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';
import { SignupComponent } from './signup/signup.component';
import { ZonesComponent } from './zones/zones.component';
import { TableComponent } from './table/table.component';
import { AuthGuard } from './auth/auth.guard'
import { AuthLoginGuard } from './auth/auth-login.guard'

const routes: Routes = [
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'showMenu', component: ShowMenuComponent, canActivate: [AuthGuard] },
  { path: 'addMenu', component: AddMenuComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent, canActivate: [AuthLoginGuard]},
  { path: 'signup', component: SignupComponent, canActivate: [AuthLoginGuard]},
  { path: 'zones', component: ZonesComponent, canActivate: [AuthGuard] },
  { path: 'table/:zone', component: TableComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
