import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { OrdersComponent } from './orders/orders.component';
import { ShowMenuComponent } from './show-menu/show-menu.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'showMenu', component: ShowMenuComponent },
  { path: 'addMenu', component: AddMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
