import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterModule, UpdateAddressModule, UpdatePaymentModule } from 'src/app/interface/auth.interface'
import { AddCategory, AddSubCategory } from '../interface/category.interface';
import { AddMenuItem } from '../interface/item.interface';
import { AddStaff, RemoveStaff, UpdateStaff } from '../interface/staff.interface';
import { CreateZone, RemoveZone } from '../interface/zone.interface';
import { GetTableState, UpdateTableState } from '../interface/table.interface';

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
}