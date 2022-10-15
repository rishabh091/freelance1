import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthService as Api } from '../api/auth.service';
import { Nav } from '../enums/orders.enum'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetOrders, UpdateOrderStatus } from '../interface/orders.interface';
import { UserInfo } from '../interface/auth.interface';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public NavEnum = Nav

  constructor(private element: ElementRef, private api: Api, private toaster: ServiceToasterService) {}

  activeArray: any = []

  ngOnInit(): void {
    this.getOrderByType('new')
  }

  getOrderByType(type: string) {
    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '')
    const payload = new GetOrders(new UserInfo(phoneNumber), type)

    this.api.getOrdersByType(payload).then(res => {
      this.activeArray = res['restaurantOrders']
    }).catch(error => { console.log(error) })
  }

  updateOrderStatus(orderID: string, orderStatus: string) {
    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '')
    const payload = new UpdateOrderStatus(new UserInfo(phoneNumber), orderID, orderStatus)

    this.api.updateOrderStatus(payload).then(res => {
      this.toaster.success(`Order marked as ${orderStatus}`)
    }).catch(error => { console.log(error) })
  }

  changeData(type: string, index: Nav) {
    this.activeArray = this.getOrderByType(type)

    let activeNav = this.element.nativeElement.querySelectorAll('.nav-active')
    activeNav[0].classList.remove('nav-active')

    let navButton = this.element.nativeElement.querySelectorAll('.nav-button')
    navButton[index].classList.add('nav-active')
  }
}
