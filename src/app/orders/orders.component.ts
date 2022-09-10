import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthService as Api } from '../api/auth.service';
import { Nav } from '../enums/orders.enum'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetOrders, UpdateOrderStatus } from '../interface/orders.interface';
import { UserInfo } from '../interface/auth.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public newOrderArray = [
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
  ];

  public completeOrderArray = [
    {
      name: 'Renny Complete',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
  ];

  public deliveredOrderArray = [
    {
      name: 'Renny Delivered',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      item: [
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
        {
          name: 'dh',
          quantity: 23,
          cost: 38,
        },
      ],
    },
  ];

  public NavEnum = Nav

  constructor(private element: ElementRef, private api: Api) {}

  activeArray: any = []

  ngOnInit(): void {
    this.activeArray = this.newOrderArray
  }

  getOrderByType(type: string) {
    const phoneNumber = localStorage.getItem('phone')
    const payload = new GetOrders(new UserInfo(phoneNumber), type)

    this.api.getOrdersByType(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateOrderStatus(orderID: string, orderStatus: string) {
    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateOrderStatus(new UserInfo(phoneNumber), orderID, orderStatus)

    this.api.updateOrderStatus(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  changeData(updatedData: any, type: Nav) {
    this.activeArray = updatedData

    let activeNav = this.element.nativeElement.querySelectorAll('.nav-active')
    activeNav[0].classList.remove('nav-active')

    let navButton = this.element.nativeElement.querySelectorAll('.nav-button')
    navButton[type].classList.add('nav-active')
  }

  expand(index: number) {
    let expandables = this.element.nativeElement.querySelectorAll('.expandable')
    let downIcons = this.element.nativeElement.querySelectorAll('.down-icon')
    
    if (expandables[index].style.height == '100%') {
      expandables[index].style.height = '0'
      downIcons[index].style.animation = 'reverse-rotate 1s forwards'
      return 
    }

    expandables[index].style.height = '100%'
    downIcons[index].style.animation = 'rotate-animation 1s forwards'
  }
}
