import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterModule, UpdateAddressModule, UpdatePaymentModule } from 'src/app/interface/auth.interface'

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
    let url = environment.apiUrl + 'updateaddress'
    return this.httpClient.post(url, payload).toPromise()
  }
}