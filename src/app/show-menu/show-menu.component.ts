import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor(private element: ElementRef) {}

  public menu = [
    {
      category: 'chinese',
      description: 'It is characterized by fine selection of ingredients, precise processing, particular care to the amount of fire, and substantial nourishment.',
      image:
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'Noodles',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'egg roll',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: false,
        },
      ],
    },
    {
      category: 'italian',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: false,
        },
      ],
    },
    {
      category: 'soup',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: false,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'bevrages',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/1292862/pexels-photo-1292862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: false,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Biryani',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Pizza',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
      ],
    },
    {
      category: 'Pasta',
      description: 'Italian cuisine has a great variety of different ingredients which are commonly used, ranging from fruits, vegetables, grains, cheeses, meats and fish. ',
      image:
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      items: [
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
        {
          itemName: 'sk',
          itemDes:
            ' From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
          price: 240,
          isVeg: true,
        },
      ],
    },
  ];
  public expand = [];
  ngOnInit(): void {
    // move it to api from where menu is coming
    this.expand = this.menu.map((obj) => {
      return true;
    });
  }

  expandMenu(index: number) {
    this.expand[index] = !this.expand[index];
  }
}
