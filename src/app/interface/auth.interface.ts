export class RegisterModule {
  userName: string;
  storeName: string;
  emailAddress: string;
  storeCatagory: string;
  userInfo: UserInfo;

  constructor(
    userName: string,
    storeName: string,
    emailAddress: string,
    storeCatagory: string,
    userInfo: UserInfo
  ) {
    this.userName = userName;
    this.storeName = storeName;
    this.emailAddress = emailAddress;
    this.storeCatagory = storeCatagory;
    this.userInfo = userInfo;
  }
}

export class UpdateAddressModule {
  userInfo: UserInfo;
  storeAddress: StoreAddress;

  constructor(userInfo: UserInfo, storeaddress: StoreAddress) {
    this.userInfo = userInfo;
    this.storeAddress = storeaddress;
  }
}

export class UpdateContactInfoModule {
	userInfo: UserInfo
	storeInfo: UpdateContactInfo

	constructor(userInfo: UserInfo, storeinfo: UpdateContactInfo) {
		this.userInfo = userInfo
		this.storeInfo = storeinfo
	}
}

export class UpdateContactInfo {
	storePhoneNumber: string
	storeEmailAddress: string

	constructor(storePhoneNumber: string, storeEmailAddress: string) {
		this.storePhoneNumber = storePhoneNumber
		this.storeEmailAddress = storeEmailAddress
	}
}

export class UserInfo {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
}

export class StoreAddress {
  storeAddressBuilding: string;
  storeAddressStreet: string;
  storeAddressCity: string;
  storeAddressPinCode: string;
  storeAddressState: string;
  storeAddressCountry: string;

  constructor(
    storeaddressBuilding: string,
    storeaddressStreet: string,
    storeaddressCity: string,
    storeaddressPinCode: string,
    storeaddressState: string,
    storeaddressCountry: string
  ) {
    this.storeAddressBuilding = storeaddressBuilding;
    this.storeAddressCity = storeaddressCity;
    this.storeAddressCountry = storeaddressCountry;
    this.storeAddressPinCode = storeaddressPinCode;
    this.storeAddressState = storeaddressState;
    this.storeAddressStreet = storeaddressStreet;
  }
}

export class StorePayment {
	acceptedCurrency: string
	paymentGatewayID: string

	constructor(acceptedCurrency: string, paymentGatewayId: string) {
		this.acceptedCurrency = acceptedCurrency
		this.paymentGatewayID = paymentGatewayId
	}
}


export class UpdatePaymentModule {
    userInfo: UserInfo;
    storePaymentInfo: StorePayment;
  
    constructor(userInfo: UserInfo, storePayment: StorePayment) {
      this.userInfo = userInfo;
      this.storePaymentInfo = storePayment;
    }
}

export class UpdateName {
	storeName: string
	userInfo: UserInfo

	constructor(storeName: string, userInfo: UserInfo) {
		this.storeName = storeName
		this.userInfo = userInfo
	}
}

export class UpdateStoreTimings {
	userInfo: UserInfo
	storeInfo: StoreTimings

	constructor(userInfo: UserInfo, storeinfo: StoreTimings) {
		this.userInfo = userInfo
		this.storeInfo = storeinfo
	}
}

export class StoreTimings {
	opensAt: string
	closesAt: string

	constructor(opensAt: string, closesAt: string) {
		this.opensAt = opensAt
		this.closesAt = closesAt
	}
}

export class UpdateAboutStore {
	userInfo: UserInfo
	storeInfo: AboutStore

	constructor(userInfo: UserInfo, storeinfo: AboutStore) {
		this.userInfo = userInfo
		this.storeInfo = storeinfo
	}
}

export class AboutStore {
	aboutStore: string

	constructor(aboutStore: string) {
		this.aboutStore = aboutStore
	}
}