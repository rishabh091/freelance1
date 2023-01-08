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

  getUIDHeaders(phoneNumber: string) {
    return {headers: new HttpHeaders({uid: phoneNumber})}
  }

  register(payload: RegisterModule) {
    const url = environment.apiUrl + 'registerstore'
    const body = {
      storeName: payload.storeName,
      storeCategory: payload.storeCatagory
    }
    const headers = {
      headers: new HttpHeaders({
        uid: payload.userInfo.phoneNumber,
        username: payload.userName,
        phonenumber: payload.userInfo.phoneNumber,
        emailaddress: payload.emailAddress
      })
    }
    return this.httpClient.post(url, body, headers).toPromise()
  }

  updateAddress(payload: UpdateAddressModule) {
    let url = environment.apiUrl + 'updatestoreaddress'
    return this.httpClient.post(url, {storeAddress: payload.storeAddress}, this.getUIDHeaders(payload.userInfo.phoneNumber)).toPromise()
  }

  updatePayment(payload: UpdatePaymentModule) {
    let url = environment.apiUrl + 'updatepaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders(payload.userInfo.phoneNumber)).toPromise()
  }

  addCategory(payload: AddCategory) {
    let url = environment.apiUrl + 'addmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  addSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'addmenusubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  addMenuItem(payload: AddMenuItem) {
    let url = environment.apiUrl + 'addmenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  addStaff(payload: AddStaff) {
    let url = environment.apiUrl + 'addstoreuser'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateStaff(payload: UpdateStaff) {
    let url = environment.apiUrl + 'updatestaff'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  removeStaff(payload: RemoveStaff) {
    let url = environment.apiUrl + 'removestaff'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  addZone(payload: CreateZone) {
    let url = environment.apiUrl + 'createzone'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }
  
  removeZone(payload: RemoveZone) {
    let url = environment.apiUrl + 'removezone'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateTableState(payload: UpdateTableState) {
    let url = environment.apiUrl + 'updatetablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getTableState(payload: GetTableState) {
    let url = environment.apiUrl + 'gettablestate'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateCategory(payload: UpdateCategory) {
    let url = environment.apiUrl + 'updatestoresubcategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  isUserRegisterd(payload: UserInfo) {
    const temp = { 'userInfo': payload }
    let url = environment.apiUrl + 'isregisteredstoreuser'
    return this.httpClient.post(url, temp, this.getUIDHeaders(payload.phoneNumber)).toPromise()
  }

  getStore(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + `getstorename`
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateName(payload: UpdateName) {
    let url = environment.apiUrl + 'updatestorename'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getMenuCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenucategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getSubCategory(payload: SubMenuCategories) {
    let url = environment.apiUrlStore + 'getmenusubcategories'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getAddress(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreaddress'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateContactInfo(payload: UpdateContactInfoModule) {
    let url = environment.apiUrl + 'updatestorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getContactInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecontactinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getPaymentInfo(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getpaymentinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateStoreTimings(payload: UpdateStoreTimings) {
    let url = environment.apiUrl + 'updatestoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders(payload.userInfo.phoneNumber)).toPromise()
  }

  getStoreTimings(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoretimings'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateStoreAbout(payload: UpdateAboutStore) {
    let url = environment.apiUrl + 'updateaboutinfo'
    return this.httpClient.post(url, payload, this.getUIDHeaders(payload.userInfo.phoneNumber)).toPromise()
  }

  getStoreAbout(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getaboutstore'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  removeMenuCategory(payload: RemoveMenuCategory) {
    let url = environment.apiUrl + 'removemenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  removeMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'removesubmenucategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'updatesubmenucategoryimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  removeMenuItem(payload: RemoveMenuItemModule) {
    let url = environment.apiUrl + 'removemenuitem'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getMenuItems(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getmenuitems'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }


  getTableTransaction(payload: TableTransactions) {
    let url = environment.apiUrl + 'gettabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  moveTableTransactions(payload: TableOrderMove) {
    let url = environment.apiUrl + 'movetabletransactions'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getOrdersByType(payload: GetOrders) {
    let url = environment.apiUrl + 'getorders'
    return this.httpClient.post(url, payload, this.getUIDHeaders(payload.userInfo.phoneNumber)).toPromise()
  }

  updateOrderStatus(payload: UpdateOrderStatus) {
    let url = environment.apiUrl + 'updateorder'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateMenuItemPrice(payload: UpdateMenuItemPrice) {
    let url = environment.apiUrl + 'updatemenuitemprice'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateMenuItemCurrentAvailability(payload: UpdateItemCurrentAvailability) {
    let url = environment.apiUrl + 'menuitemcurrentavilaiblity'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  updateMenuItemDailyAvailability(payload: UpdateMenuItemDailyAvailability) {
    let url = environment.apiUrl + 'menuitemdailyavailablity'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getZone(payload: ZoneSchema) {
    let url = environment.apiUrl + 'gettablezones'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getStaff(payload: GetStaff) {
    let url = environment.apiUrl + 'getstoreusers'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getCategory(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstorecategory'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getStoreProfilePic(payload: StoreIdSchema) {
    let url = environment.apiUrlStore + 'getstoreprofilepic'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getMenuItemImage(payload: MenuItemImage) {
    let url = environment.apiUrl + '/getmenuitemimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  uploadImage(payload: FormData) {
    let url = environment.imageUrl
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }

  getImageUrl(url: string) {
    return "https://media.hiveezy.com/" + url + '?' + Date.now()
  }

  getCategoryImage(payload: CategoryImageInfo) {
    let url = environment.apiUrl + '/getmenuimage'
    return this.httpClient.post(url, payload, this.getUIDHeaders(localStorage.getItem('phoneWithCountry').replace('+', ''))).toPromise()
  }
}