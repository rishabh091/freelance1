import { UserInfo } from "./auth.interface"


export class StoreStaff {
    public name: string
    public role: string
    public phoneNumber: string
    public emailAddress: string

    constructor(name: string, role: string, phoneNumber: string, emailAddress: string) {
        this.name = name
        this.role = role
        this.phoneNumber = phoneNumber
        this.emailAddress = emailAddress
    }
}

export class AddStaff {
    userInfo: UserInfo
    storestaff: StoreStaff

    constructor(userInfo: UserInfo, storestaff: StoreStaff) {
        this.userInfo = userInfo
        this.storestaff = storestaff
    }
}

export class UpdateStaff {
    userInfo: UserInfo
    storestaff: StoreStaff

    constructor(userInfo: UserInfo, storestaff: StoreStaff) {
        this.userInfo = userInfo
        this.storestaff = storestaff
    }
}

export class RemoveStaff {
    userInfo: UserInfo
    storestaff: StoreStaff

    constructor(userInfo: UserInfo, storestaff: StoreStaff) {
        this.userInfo = userInfo
        this.storestaff = storestaff
    }
}