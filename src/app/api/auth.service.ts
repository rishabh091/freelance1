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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getUIDHeaders() {
    const authToken = localStorage.getItem('token')
    return {headers: new HttpHeaders({'Authorization': `Bearer ${authToken}` })}
  }

  register(payload: RegisterModule) {
    const url = environment.apiUrl + 'registerstore'
    const body = {
      storeName: payload.storeName,
      storeCategory: payload.storeCatagory
    }
    const authToken = localStorage.getItem('token')
    const headers = {
      headers: new HttpHeaders({
        uid: payload.userInfo.phoneNumber,
        username: payload.userName,
        phonenumber: payload.userInfo.phoneNumber,
        emailaddress: payload.emailAddress,
        Authorization: `Bearer ${authToken}`
      })
    }
    return this.httpClient.post(url, body, headers).toPromise()
  }

  updateAddress(payload: UpdateAddressModule) {
    let url = environment.apiUrl + 'updatestoreaddress'
    return this.httpClient.post(url, {storeAddress: payload.storeAddress}, this.getUIDHeaders()).toPromise()
  }

  createOrder(payload) {
    let url = environment.apiUrl + 'postpaidorder'
    let headers = this.getUIDHeaders().headers;
    headers = headers.append('authcheck', 'ok');
    return this.httpClient.post(url, payload, {headers: headers}).toPromise()
  }

  updatePayment(payload: UpdatePaymentModule) {
    let url = environment.apiUrl + 'updatepaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  addCategory(payload: AddCategory) {
    let url = environment.apiUrl + 'addmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  addSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'addmenusubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  addMenuItem(payload: AddMenuItem) {
    let url = environment.apiUrl + 'addmenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  addStaff(payload: AddStaff) {
    let url = environment.apiUrl + 'addstoreuser'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateStaff(payload: UpdateStaff) {
    let url = environment.apiUrl + 'updatestaff'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  removeStaff(payload: RemoveStaff) {
    let url = environment.apiUrl + 'removestoreuser'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  addZone(payload: CreateZone) {
    let url = environment.apiUrl + 'createzone'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }
  
  removeZone(payload: RemoveZone) {
    let url = environment.apiUrl + 'removezone'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateTableState(payload: UpdateTableState) {
    let url = environment.apiUrl + 'updatetablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getTableState(payload: GetTableState) {
    let url = environment.apiUrl + 'gettablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateCategory(payload: UpdateCategory) {
    let url = environment.apiUrl + 'updatestoresubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  isUserRegisterd(payload: UserInfo) {
    const temp = { 'userInfo': payload }
    let url = environment.apiUrl + 'isregisteredstoreuser'
    return this.httpClient.post(url, temp, this.getUIDHeaders()).toPromise()
  }

  getStore(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + `getstorename`
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateName(payload: UpdateName) {
    let url = environment.apiUrl + 'updatestorename'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getMenuCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenucategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getSubCategory(payload: SubMenuCategories) {
    let url = environment.apiUrlStore + 'getmenusubcategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getAddress(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreaddress'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateContactInfo(payload: UpdateContactInfoModule) {
    let url = environment.apiUrl + 'updatestorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getContactInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getPaymentInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getpaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateStoreTimings(payload: UpdateStoreTimings) {
    let url = environment.apiUrl + 'updatestoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getStoreTimings(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateStoreAbout(payload: UpdateAboutStore) {
    let url = environment.apiUrl + 'updateaboutinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getStoreAbout(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getaboutstore'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  removeMenuCategory(payload: RemoveMenuCategory) {
    let url = environment.apiUrl + 'removemenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  removeMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'removesubmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'updatesubmenucategoryimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  removeMenuItem(payload: RemoveMenuItemModule) {
    let url = environment.apiUrl + 'removemenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getMenuItems(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenuitems'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }


  getTableTransaction(payload: TableTransactions) {
    let url = environment.apiUrl + 'gettabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  moveTableTransactions(payload: TableOrderMove) {
    let url = environment.apiUrl + 'movetabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getOrdersByType(payload: GetOrders) {
    let url = environment.apiUrl + 'getorders'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateOrderStatus(payload: UpdateOrderStatus) {
    let url = environment.apiUrl + 'updateorder'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateMenuItemPrice(payload: UpdateMenuItemPrice) {
    let url = environment.apiUrl + 'updatemenuitemprice'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateMenuItemCurrentAvailability(payload: UpdateItemCurrentAvailability) {
    let url = environment.apiUrl + 'menuitemcurrentavilaiblity'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  updateMenuItemDailyAvailability(payload: UpdateMenuItemDailyAvailability) {
    let url = environment.apiUrl + 'menuitemdailyavailablity'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getZone(payload: ZoneSchema) {
    let url = environment.apiUrl + 'gettablezones'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getStaff(payload: GetStaff) {
    let url = environment.apiUrl + 'getstoreusers'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getStoreProfilePic(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreprofilepic'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getMenuItemImage(payload: MenuItemImage) {
    let url = environment.apiUrl + '/getmenuitemimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  uploadImage(payload: FormData) {
    let url = environment.imageUrl
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }

  getImageUrl(url: string) {
    return "https://media.hiveezy.com/" + url + '?' + Date.now()
  }

  getCategoryImage(payload: CategoryImageInfo) {
    let url = environment.apiUrl + '/getmenuimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders()).toPromise()
  }
}