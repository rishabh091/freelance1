export class RegisterModule {
  userName: string;
  storeName: string;
  emailAddress: string;
  userInfo: UserInfo;

  constructor(
    userName: string,
    storeName: string,
    emailAddress: string,
    userInfo: UserInfo
  ) {
    this.userName = userName;
    this.storeName = storeName;
    this.emailAddress = emailAddress;
    this.userInfo = userInfo;
  }
}

export class UpdateAddressModule {
  userInfo: UserInfo;
  storeaddress: StoreAddress;

  constructor(userInfo: UserInfo, storeaddress: StoreAddress) {
    this.userInfo = userInfo;
    this.storeaddress = storeaddress;
  }
}

export class UserInfo {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
}

export class StoreAddress {
  storeaddressBuilding: string;
  storeaddressStreet: string;
  storeaddressCity: string;
  storeaddressPinCode: string;
  storeaddressState: string;
  storeaddressCountry: string;

  constructor(
    storeaddressBuilding: string,
    storeaddressStreet: string,
    storeaddressCity: string,
    storeaddressPinCode: string,
    storeaddressState: string,
    storeaddressCountry: string
  ) {
    this.storeaddressBuilding = storeaddressBuilding;
    this.storeaddressCity = storeaddressCity;
    this.storeaddressCountry = storeaddressCountry;
    this.storeaddressPinCode = storeaddressPinCode;
    this.storeaddressState = storeaddressState;
    this.storeaddressStreet = storeaddressStreet;
  }
}

export class StorePayment {
  acceptedCurrency: string;
  accountNumber: string;
  ifcsCode: string;
  accountHolderName: string;

  constructor(
    acceptedCurrency: string,
    accountNumber: string,
    ifcsCode: string,
    accountHolderName: string
  ) {
    this.acceptedCurrency = acceptedCurrency;
    this.accountNumber = accountNumber;
    this.ifcsCode = ifcsCode;
    this.accountHolderName = accountHolderName;
  }
}


export class UpdatePaymentModule {
    userInfo: UserInfo;
    storePayment: StorePayment;
  
    constructor(userInfo: UserInfo, storePayment: StorePayment) {
      this.userInfo = userInfo;
      this.storePayment = storePayment;
    }
  }