import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterModule, UpdateAboutStore, UpdateAddressModule, UpdateContactInfoModule, UpdateName, UpdatePaymentModule, UpdateStoreTimings, UserInfo } from 'src/app/interface/auth.interface'
import { AddCategory, AddSubCategory, CategoryImageInfo, RemoveMenuCategory, SubMenuCategories, UpdateCategory, UpdateItemCurrentAvailability, UpdateMenuItemDailyAvailability, UpdateMenuItemPrice } from '../interface/category.interface';
import { AddMenuItem, RemoveMenuItemModule } from '../interface/item.interface';
import { AddStaff, GetStaff, RemoveStaff, UpdateStaff } from '../interface/staff.interface';
import { CreateZone, RemoveZone, ZoneSchema } from '../interface/zone.interface';
import { GetTableState, TableOrderMove, TableTransactions, UpdateTableState } from '../interface/table.interface';
import { GetOrders, UpdateOrderStatus } from '../interface/orders.interface';
import { MenuItemImage, StoreIdSchema } from '../interface/interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  getUIDHeaders() {
    const token = JSON.parse(localStorage.getItem('token'))
    const authToken = token.token
    this.auth.isTokenValid()
    return {headers: new HttpHeaders({'Authorization': `Bearer ${authToken}` })}
  }

  register(payload: RegisterModule) {
    const token = JSON.parse(localStorage.getItem('token'))

    const url = environment.apiUrl + 'registerstore'
    const body = {
      storeName: payload.storeName,
      storeCategory: payload.storeCatagory
    }
    const authToken = token.token
    const headers = {
      headers: new HttpHeaders({
        uid: payload.userInfo.phoneNumber,
        username: payload.userName,
        phonenumber: payload.userInfo.phoneNumber,
        emailaddress: payload.emailAddress,
        Authorization: `Bearer ${authToken}`
      })
    }
    return this.httpClient.post(url, body, headers).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateAddress(payload: UpdateAddressModule) {
    let url = environment.apiUrl + 'updatestoreaddress'
    return this.httpClient.post(url, {storeAddress: payload.storeAddress}, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  createOrder(payload) {
    let url = environment.apiUrl + 'postpaidorder'
    let headers = this.getUIDHeaders().headers;
    headers = headers.append('authcheck', 'ok');
    return this.httpClient.post(url, payload, {headers: headers}).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updatePayment(payload: UpdatePaymentModule) {
    let url = environment.apiUrl + 'updatepaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  addCategory(payload: AddCategory) {
    let url = environment.apiUrl + 'addmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  addSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'addmenusubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  addMenuItem(payload: AddMenuItem) {
    let url = environment.apiUrl + 'addmenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  addStaff(payload: AddStaff) {
    let url = environment.apiUrl + 'addstoreuser'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateStaff(payload: UpdateStaff) {
    let url = environment.apiUrl + 'updatestaff'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  removeStaff(payload: RemoveStaff) {
    let url = environment.apiUrl + 'removestoreuser'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  addZone(payload: CreateZone) {
    let url = environment.apiUrl + 'createzone'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }
  
  removeZone(payload: RemoveZone) {
    let url = environment.apiUrl + 'removezone'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateTableState(payload: UpdateTableState) {
    let url = environment.apiUrl + 'updatetablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getTableState(payload: GetTableState) {
    let url = environment.apiUrl + 'gettablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateCategory(payload: UpdateCategory) {
    let url = environment.apiUrl + 'updatestoresubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  isUserRegisterd(payload: UserInfo) {
    const temp = { 'userInfo': payload }
    let url = environment.apiUrl + 'isregisteredstoreuser'
    return this.httpClient.post(url, temp, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getStore(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + `getstorename`
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateName(payload: UpdateName) {
    let url = environment.apiUrl + 'updatestorename'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getMenuCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenucategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getSubCategory(payload: SubMenuCategories) {
    let url = environment.apiUrlStore + 'getmenusubcategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getAddress(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreaddress'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateContactInfo(payload: UpdateContactInfoModule) {
    let url = environment.apiUrl + 'updatestorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getContactInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getPaymentInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getpaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateStoreTimings(payload: UpdateStoreTimings) {
    let url = environment.apiUrl + 'updatestoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getStoreTimings(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateStoreAbout(payload: UpdateAboutStore) {
    let url = environment.apiUrl + 'updateaboutinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getStoreAbout(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getaboutstore'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  removeMenuCategory(payload: RemoveMenuCategory) {
    let url = environment.apiUrl + 'removemenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  removeMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'removesubmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'updatesubmenucategoryimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  removeMenuItem(payload: RemoveMenuItemModule) {
    let url = environment.apiUrl + 'removemenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getMenuItems(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenuitems'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }


  getTableTransaction(payload: TableTransactions) {
    let url = environment.apiUrl + 'gettabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  moveTableTransactions(payload: TableOrderMove) {
    let url = environment.apiUrl + 'movetabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getOrdersByType(payload: GetOrders) {
    let url = environment.apiUrl + 'getorders'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateOrderStatus(payload: UpdateOrderStatus) {
    let url = environment.apiUrl + 'updateorder'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateMenuItemPrice(payload: UpdateMenuItemPrice) {
    let url = environment.apiUrl + 'updatemenuitemprice'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateMenuItemCurrentAvailability(payload: UpdateItemCurrentAvailability) {
    let url = environment.apiUrl + 'menuitemcurrentavilaiblity'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  updateMenuItemDailyAvailability(payload: UpdateMenuItemDailyAvailability) {
    let url = environment.apiUrl + 'menuitemdailyavailablity'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getZone(payload: ZoneSchema) {
    let url = environment.apiUrl + 'gettablezones'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getStaff(payload: GetStaff) {
    let url = environment.apiUrl + 'getstoreusers'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getStoreProfilePic(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreprofilepic'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getMenuItemImage(payload: MenuItemImage) {
    let url = environment.apiUrl + '/getmenuitemimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  uploadImage(payload: FormData) {
    let url = environment.imageUrl
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }

  getImageUrl(url: string) {
    return "https://media.hiveezy.com/" + url + '?' + Date.now()
  }

  getCategoryImage(payload: CategoryImageInfo) {
    let url = environment.apiUrl + '/getmenuimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise().catch((error) => {
      if (error.error == "E_AUTH:UNKNOWN") {
        this.auth.login();
        
      }
    })
  }
}