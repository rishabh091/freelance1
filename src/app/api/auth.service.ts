import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterModule, UpdateAboutStore, UpdateAddressModule, UpdateContactInfoModule, UpdateName, UpdatePaymentModule, UpdateStoreTimings, UserInfo } from 'src/app/interface/auth.interface'
import { AddCategory, AddSubCategory, RemoveMenuCategory, UpdateCategory } from '../interface/category.interface';
import { AddMenuItem, RemoveMenuItemModule } from '../interface/item.interface';
import { AddStaff, RemoveStaff, UpdateStaff } from '../interface/staff.interface';
import { CreateZone, RemoveZone } from '../interface/zone.interface';
import { GetTableState, TableOrderMove, TableTransactions, UpdateTableState } from '../interface/table.interface';
import { GetOrders, UpdateOrderStatus } from '../interface/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(payload: RegisterModule) {
    let url = environment.apiUrl + 'register'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateAddress(payload: UpdateAddressModule) {
    let url = environment.apiUrl + 'updateaddress'
    return this.httpClient.post(url, payload).toPromise()
  }

  updatePayment(payload: UpdatePaymentModule) {
    let url = environment.apiUrl + 'updatepaymentinfo'
    return this.httpClient.post(url, payload).toPromise()
  }

  addCategory(payload: AddCategory) {
    let url = environment.apiUrl + 'addmenucategory'
    return this.httpClient.post(url, payload).toPromise()
  }

  addSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'addmenusubcategory'
    return this.httpClient.post(url, payload).toPromise()
  }

  addMenuItem(payload: AddMenuItem) {
    let url = environment.apiUrl + 'addmenuitem'
    return this.httpClient.post(url, payload).toPromise()
  }

  addStaff(payload: AddStaff) {
    let url = environment.apiUrl + 'addstaff'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateStaff(payload: UpdateStaff) {
    let url = environment.apiUrl + 'updatestaff'
    return this.httpClient.post(url, payload).toPromise()
  }

  removeStaff(payload: RemoveStaff) {
    let url = environment.apiUrl + 'removestaff'
    return this.httpClient.post(url, payload).toPromise()
  }

  addZone(payload: CreateZone) {
    let url = environment.apiUrl + 'createzone'
    return this.httpClient.post(url, payload).toPromise()
  }
  
  removeZone(payload: RemoveZone) {
    let url = environment.apiUrl + 'removezone'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateTableState(payload: UpdateTableState) {
    let url = environment.apiUrl + 'updatetablestate'
    return this.httpClient.post(url, payload).toPromise()
  }

  getTableState(payload: GetTableState) {
    let url = environment.apiUrl + 'gettablestate'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateCategory(payload: UpdateCategory) {
    let url = environment.apiUrl + 'updatecategory'
    return this.httpClient.post(url, payload).toPromise()
  }

  isUserRegisterd(payload: UserInfo) {
    const temp = { 'userInfo': payload }
    let url = environment.apiUrl + 'isregistereduser'
    return this.httpClient.post(url, temp).toPromise()
  }

  getStore(storeId: string) {
    let url = environment.apiUrl + `name?storeid=${storeId}`
    return this.httpClient.get(url).toPromise()
  }

  updateName(payload: UpdateName) {
    let url = environment.apiUrl + 'updateName'
    return this.httpClient.post(url, payload).toPromise()
  }

  getCategory(storeId: string) {
    let url = environment.apiUrl + 'category?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  getAddress(storeId: string) {
    let url = environment.apiUrl + 'address?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  updateContactInfo(payload: UpdateContactInfoModule) {
    let url = environment.apiUrl + 'updatecontactinfo'
    return this.httpClient.post(url, payload).toPromise()
  }

  getContactInfo(storeId: string) {
    let url = environment.apiUrl + 'contactinfo?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  getPaymentInfo(storeId: string) {
    let url = environment.apiUrl + 'paymentinfo?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  updateStoreTimings(payload: UpdateStoreTimings) {
    let url = environment.apiUrl + 'updatestoretimings'
    return this.httpClient.post(url, payload).toPromise()
  }

  getStoreTimings(storeId: string) {
    let url = environment.apiUrl + 'storetimings?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  updateStoreAbout(payload: UpdateAboutStore) {
    let url = environment.apiUrl + 'updateaboutinfo'
    return this.httpClient.post(url, payload).toPromise()
  }

  getStoreAbout(storeId: string) {
    let url = environment.apiUrl + 'aboutstore?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  removeMenuCategory(payload: RemoveMenuCategory) {
    let url = environment.apiUrl + 'removemenucategory'
    return this.httpClient.post(url, payload).toPromise()
  }

  removeMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'removesubmenucategory'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateMenuSubCategory(payload: AddSubCategory) {
    let url = environment.apiUrl + 'updatesubmenucategoryimage'
    return this.httpClient.post(url, payload).toPromise()
  }

  removeMenuItem(payload: RemoveMenuItemModule) {
    let url = environment.apiUrl + 'removemenuitem'
    return this.httpClient.post(url, payload).toPromise()
  }

  getMenuCategory(storeId: string) {
    let url = environment.apiUrl + 'menucategories?storeid=' + storeId
    return this.httpClient.get(url).toPromise()
  }

  getTableTransaction(payload: TableTransactions) {
    let url = environment.apiUrl + 'gettabletransactions'
    return this.httpClient.post(url, payload).toPromise()
  }

  moveTableTransactions(payload: TableOrderMove) {
    let url = environment.apiUrl + 'movetabletransactions'
    return this.httpClient.post(url, payload).toPromise()
  }

  getOrdersByType(payload: GetOrders) {
    let url = environment.apiUrl + 'getorders'
    return this.httpClient.post(url, payload).toPromise()
  }

  updateOrderStatus(payload: UpdateOrderStatus) {
    let url = environment.apiUrl + 'updateorder'
    return this.httpClient.post(url, payload).toPromise()
  }
}