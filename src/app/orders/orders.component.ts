import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor() {}

  newOrderArray = [
    {
      name: 'Renny',
      table: '12',
      order: '12',
      bill: '393',
      items: [
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

  completeOrderArray = [
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

  deliveredOrderArray = [
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

  newOrder = true;
  completeOrder = false;
  deiveredOrder = false;
  ngOnInit(): void {}

  
  newOrderDisplay() {
    this.newOrder = true;
    this.completeOrder = false;
    this.deiveredOrder = false;
  }
  completeOrderDisplay() {
    this.newOrder = false;
    this.completeOrder = true;
    this.deiveredOrder = false;
  }
  deliveredOrderDisplay() {
    this.newOrder = false;
    this.completeOrder = false;
    this.deiveredOrder = true;
  }
}
