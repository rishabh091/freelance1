import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthService as Api } from '../api/auth.service';
import { Nav } from '../enums/orders.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetOrders, UpdateOrderStatus } from '../interface/orders.interface';
import { UserInfo } from '../interface/auth.interface';
import { ServiceToasterService } from '../service-toaster.service';
import { StoreIdSchema } from '../interface/interface';
import { SubMenuCategories } from '../interface/category.interface';
import { CreateTableInfo, ZoneSchema } from '../interface/zone.interface';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public NavEnum = Nav;

  public spinner:boolean =  true;

  constructor(
    private element: ElementRef,
    private api: Api,
    private toaster: ServiceToasterService
  ) {}

  OrderTypes = {
    NEW: 'new',
    READY: 'ready',
    DELIVERED: 'delivered',
    CANCELED: 'canceled',
  };

  // startTableNumber: number = 0;
  // endTableNumber: number;

  activeArray: any = [];
  activatedOrderType: string = this.OrderTypes.NEW;

  categories: any;
  subCategories: any;

  categoryName: string = '';
  subCategoryName: string = '';
  zoneName: string = '';

  public zoneNames: CreateTableInfo[];

  ngOnInit(): void {
    this.getOrderByType(this.activatedOrderType);
    this.getCategory();
    this.getZone();
  }

  getCategory() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getMenuCategory(new StoreIdSchema(storeId))
      .then((res: {}) => {
        this.categories = res['menuCategories'];
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getSubCategory() {
    const storeId = localStorage.getItem('storeId');
    let category = this.categoryName;
    //let category = this.categoryName
    const payload = new SubMenuCategories(storeId, category);
    this.api
      .getSubCategory(payload)
      .then((res) => {
        this.subCategories = res['menuSubCategories'];
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }
  getZone() {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new ZoneSchema(new UserInfo(phoneNumber));
    this.api
      .getZone(payload)
      .then((res: any) => {
        this.zoneNames = res.zoneInfo;
        console.log(this.zoneNames);
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getOrderByType(type: string) {
    this.activatedOrderType = type;
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new GetOrders(new UserInfo(phoneNumber), type);

    return this.api
      .getOrdersByType(payload)
      .then((res) => {
        this.spinner = false;
        this.activeArray = res['restaurantOrders'];
      })
      .catch((error) => {
        this.spinner = false;
        this.toaster.failure(error);
      });
  }

  updateOrderStatus(orderID: string, orderStatus: string) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateOrderStatus(
      new UserInfo(phoneNumber),
      orderID,
      orderStatus
    );

    this.api
      .updateOrderStatus(payload)
      .then((res) => {
        this.toaster.info(`Order marked as ${orderStatus}`);
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  changeData(type: string, index: Nav) {
    this.activeArray = this.getOrderByType(type);
    // this.startTableNumber = 0;
    // this.endTableNumber = undefined;
  }

  applyFilter() {
    // if (this.startTableNumber && this.endTableNumber) {
    //   this.getOrderByType(this.activatedOrderType).then(() => {
    //     this.activeArray = this.activeArray.filter((value) => {
    //       return (
    //         value.table >= this.startTableNumber &&
    //         value.table <= this.endTableNumber
    //       );
    //     });

    //     this.applySubFilter()
    //   });
    // }
    this.getOrderByType(this.activatedOrderType).then(() => {
      this.applySubFilter();
    });
  }

  applySubFilter() {
    if (this.categoryName && this.subCategoryName) {
      this.activeArray = this.activeArray.filter((value) => {
        return value.subMenu == this.subCategoryName;
      });
    }
    if (this.zoneName) {
      this.activeArray = this.activeArray.filter((value) => {
        return value.zone == this.zoneName;
      });
    }
  }
}
