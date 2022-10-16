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

  OrderTypes = {
    NEW: 'new',
    READY: 'ready',
    DELIVERED: 'delivered',
    CANCELED: 'canceled'
  }

  startTableNumber: number = 0
  endTableNumber: number

  activeArray: any = []
  activatedOrderType: string = this.OrderTypes.NEW

  ngOnInit(): void {
    this.getOrderByType(this.activatedOrderType)
  }

  getOrderByType(type: string) {
    this.activatedOrderType = type
    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '')
    const payload = new GetOrders(new UserInfo(phoneNumber), type)

    return this.api.getOrdersByType(payload).then(res => {
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
    this.startTableNumber = 0
    this.endTableNumber = undefined

    let activeNav = this.element.nativeElement.querySelectorAll('.nav-active')
    activeNav[0].classList.remove('nav-active')

    let navButton = this.element.nativeElement.querySelectorAll('.nav-button')
    navButton[index].classList.add('nav-active')
  }

  applyFilter() {
    if (this.startTableNumber == undefined || this.endTableNumber == undefined) { return }
    
    this.getOrderByType(this.activatedOrderType).then(() => {
      this.activeArray = this.activeArray.filter((value) => { return value.table >= this.startTableNumber && value.table <= this.endTableNumber })
    })
  }
}
