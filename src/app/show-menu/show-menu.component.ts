import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor() {}

  public menu = [
    {
      category: 'chinese',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'italian',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'soup',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'bevrages',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Biryani',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Pizza',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Pasta',
      description: 'hfdgd',
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes: 'hd',
          price: 240,
          isVeg: true,
        },
      ],
    },
  ];
  ngOnInit(): void {}
}
