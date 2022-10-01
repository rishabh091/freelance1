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
var forms_1 = require("@angular/forms");
var auth_interface_1 = require("../interface/auth.interface");
var category_interface_1 = require("../interface/category.interface");
var interface_1 = require("../interface/interface");
var item_interface_1 = require("../interface/item.interface");
var ShowMenuComponent = /** @class */ (function () {
    function ShowMenuComponent(formBuilder, auth, api) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.api = api;
        this.submitted = false;
        this.menuGroups = [];
        this.subMenuGroups = {};
        this.menuItems = {};
        this.updateCategorySubmitted = false;
        this.subMenuSubmitted = false;
        this.category = '';
        this.subCategory = '';
        this.weekDayAvailability = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ];
        this.weekDayAvailabilityError = true;
        this.setCategoryName = '';
        this.setSubCategoryName = '';
        this.expand = [];
    }
    ShowMenuComponent.prototype.ngOnInit = function () {
        // move it to api from where menu is coming
        this.expand = this.menuGroups.map(function (obj) {
            return true;
        });
        this.menuItemForm = this.formBuilder.group({
            ItemName: ['', forms_1.Validators.required],
            ItemType: ['', forms_1.Validators.required],
            Price: [0, forms_1.Validators.required],
            Discount: [0],
            AvailableNow: [false, forms_1.Validators.required],
            NextAvailableTime: [new Date(), forms_1.Validators.required],
            DisplayImagePath: ['']
        });
        this.updateCategoryForm = this.formBuilder.group({
            storeSubCategory: ['', forms_1.Validators.required],
            isPrePaid: [false, forms_1.Validators.required],
            isFoodServedToTable: [false, forms_1.Validators.required]
        });
        this.subMenuCategoryForm = this.formBuilder.group({
            menuCategory: ['', forms_1.Validators.required],
            menuSubCategory: ['', forms_1.Validators.required],
            imageURL: ['', forms_1.Validators.required]
        });
        this.getMenuItem();
    };
    ShowMenuComponent.prototype.getCategories = function () {
        var storeId = localStorage.getItem('storeId');
        this.api
            .getCategory(new interface_1.StoreIdSchema(storeId))
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.getMenuCategory = function () {
        var storeId = localStorage.getItem('storeId');
        this.api
            .getMenuItems(new interface_1.StoreIdSchema(storeId))
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.getMenuItem = function () {
        var _this = this;
        var storeId = localStorage.getItem('storeId');
        this.api
            .getMenuItems(new interface_1.StoreIdSchema(storeId))
            .then(function (res) {
            _this.menuGroups = res['menuItems'].map(function (obj) {
                return obj.menu;
            });
            for (var _i = 0, _a = _this.menuGroups; _i < _a.length; _i++) {
                var menu = _a[_i];
                _this.subMenuGroups[menu] = [];
                _this.menuItems[menu] = {};
            }
            for (var _b = 0, _c = res['menuItems']; _b < _c.length; _b++) {
                var item = _c[_b];
                _this.subMenuGroups[item.menu].push(item.subMenu);
                _this.menuItems[item.menu][item.subMenu] = [];
            }
            for (var _d = 0, _e = res['menuItems']; _d < _e.length; _d++) {
                var item = _e[_d];
                _this.menuItems[item.menu][item.subMenu].push(item);
            }
            console.log(_this.menuGroups);
            console.log(_this.subMenuGroups);
            console.log(_this.menuItems);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(ShowMenuComponent.prototype, "f", {
        get: function () {
            return this.menuItemForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShowMenuComponent.prototype, "subCategoryControls", {
        get: function () {
            return this.subMenuCategoryForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShowMenuComponent.prototype, "updateCategoryFormControls", {
        get: function () {
            return this.updateCategoryForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    ShowMenuComponent.prototype.expandMenu = function (index) {
        this.expand[index] = !this.expand[index];
    };
    ShowMenuComponent.prototype.editProduct = function () {
        var _this = this;
        this.submitted = true;
        if (this.menuItemForm.invalid) {
            return;
        }
        this.weekDayAvailability.map(function (available) {
            if (available)
                _this.weekDayAvailabilityError = false;
        });
        this.menuItemForm.value.availableFrom = this.convertToSeconds(this.menuItemForm.value.availableFrom);
        this.menuItemForm.value.availableTill = this.convertToSeconds(this.menuItemForm.value.availableTill);
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        var pricePayload = new category_interface_1.UpdateMenuItemPrice(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.MenuItemPrice(this.category, this.subCategory, this.menuItemForm.value.ItemName, this.menuItemForm.value.Price));
        var currentAvailabilityPayload = new category_interface_1.UpdateItemCurrentAvailability(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.MenuItemCurrentAvailability(this.category, this.subCategory, this.menuItemForm.value.ItemName, this.menuItemForm.value.AvailableNow));
        var dailyAvailabilityPayload = new category_interface_1.UpdateMenuItemDailyAvailability(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.ItemDailyAvailability(this.category, this.subCategory, this.menuItemForm.value.ItemName, this.menuItemForm.value.availableFrom, this.menuItemForm.value.availableTill, this.weekDayAvailability));
        this.api
            .updateMenuItemPrice(pricePayload)
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
        this.api
            .updateMenuItemCurrentAvailability(currentAvailabilityPayload)
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
        this.api
            .updateMenuItemDailyAvailability(dailyAvailabilityPayload)
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.convertToSeconds = function (time) {
        var hoursAndMin = time.split(':');
        if (hoursAndMin.length < 2)
            return parseInt(time);
        var hoursInSec = parseInt(hoursAndMin[0]) * 60 * 60;
        var minutesInSec = parseInt(hoursAndMin[1]) * 60;
        return hoursInSec + minutesInSec;
    };
    ShowMenuComponent.prototype.openEditModal = function (editObject) {
        this.menuItemForm.controls['ItemName'].setValue(editObject.ItemName);
        this.menuItemForm.controls['ItemType'].setValue(editObject.ItemType);
        this.menuItemForm.controls['Price'].setValue(editObject.Price);
        this.menuItemForm.controls['Discount'].setValue(editObject.Discount);
        this.menuItemForm.controls['AvailableNow'].setValue(editObject.AvailableNow);
        this.menuItemForm.controls['NextAvailableTime'].setValue(new Date(editObject.NextAvailableTime).toISOString().substring(0, 16));
        this.menuItemForm.controls['DisplayImagePath'].setValue(editObject.DisplayImagePath);
    };
    ShowMenuComponent.prototype.updateCategory = function () {
        this.updateCategorySubmitted = true;
        if (this.updateCategoryForm.invalid) {
            return;
        }
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        var payload = new category_interface_1.UpdateCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.UpdateCategoryModule(this.updateCategoryForm.value.storeSubCatagory, this.updateCategoryForm.value.isPrePaid, this.updateCategoryForm.value.isFoodServedToTable));
        this.api
            .updateCategory(payload)
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.removeCategory = function (category) {
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        this.api
            .removeMenuCategory(new category_interface_1.RemoveMenuCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.MenuInfo(category)))
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.removeMenuItem = function (category, subCategory, menuItem) {
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        this.api
            .removeMenuItem(new item_interface_1.RemoveMenuItemModule(new auth_interface_1.UserInfo(phoneNumber), new item_interface_1.RemoveMenuItem(category, subCategory, menuItem)))
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.removeSubCategory = function (category, subCategory, imageUrl) {
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        this.api
            .removeMenuSubCategory(new category_interface_1.AddSubCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.AddSubCategoryMenuInfo(category, subCategory, imageUrl)))
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.updateSubCategory = function () {
        this.subMenuSubmitted = true;
        if (this.subMenuCategoryForm.invalid)
            return;
        var phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
        var payload = new category_interface_1.AddSubCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.AddSubCategoryMenuInfo(this.subMenuCategoryForm.value.menuCategory, this.subMenuCategoryForm.value.menuSubCategory, this.subMenuCategoryForm.value.imageURL));
        this.api
            .updateMenuSubCategory(payload)
            .then(function (res) {
            console.log(res);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    ShowMenuComponent.prototype.setCategory = function (item) {
        this.updateCategoryForm.controls['storeSubCategory'].setValue(item);
        this.setCategoryName = item;
    };
    ShowMenuComponent.prototype.seSubtCategory = function (item) {
        this.updateCategoryForm.controls['storeSubCategory'].setValue(item);
        this.setSubCategoryName = item;
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
