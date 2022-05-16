"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowMenuComponent = void 0;
var core_1 = require("@angular/core");
var ShowMenuComponent = /** @class */ (function () {
    function ShowMenuComponent(element) {
        this.element = element;
        this.menu = [
            {
                category: 'chinese',
                description: 'hfdgd',
                image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                items: [
                    {
                        itemName: 'Noodles',
                        itemDes: 'Looking to try something else? Choose from our menu full of deliciously delightful dishes. From classic favorites like Penne Rosa, Pesto Cavatappi and our World-Famous Mac & Cheese to our Japanese Pan Noodles, Pad Thai, even our fresh and exciting Zoodles and Cauliflower Noodles dishes. ​',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'egg roll',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: false
                    }
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
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
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                    {
                        itemName: 'sk',
                        itemDes: 'hd',
                        price: 240,
                        isVeg: true
                    },
                ]
            },
        ];
        this.expand = [];
    }
    ShowMenuComponent.prototype.ngOnInit = function () {
        // move it to api from where menu is coming
        this.expand = this.menu.map(function (obj) { return true; });
    };
    ShowMenuComponent.prototype.expandMenu = function (index) {
        this.expand[index] = !this.expand[index];
    };
    ShowMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-show-menu',
            templateUrl: './show-menu.component.html',
            styleUrls: ['./show-menu.component.css']
        })
    ], ShowMenuComponent);
    return ShowMenuComponent;
}());
exports.ShowMenuComponent = ShowMenuComponent;
