import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthModuleService {

  constructor() { }
}


export class RegisterModule {
  userName: string
  storeName: string
  emailAddress: string
  userInfo: UserInfo

  constructor(userName: string,
    storeName: string,
    emailAddress: string,
    userInfo: UserInfo) {
      this.userName = userName
      this.storeName = storeName
      this.emailAddress = emailAddress
      this.userInfo = userInfo
  }
}

export class UserInfo {
  phoneNumber: string

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber
  }
}