import { UserInfo } from "./auth.interface"


export class StoreStaff {
    public name: string
    public role: string[]
    public phoneNumber: string
    public emailAddress: string

    constructor(name: string, role: string[], phoneNumber: string, emailAddress: string) {
        this.name = name
        this.role = role
        this.phoneNumber = phoneNumber
        this.emailAddress = emailAddress
    }
}

export class UpdateStoreStaff {
    public name: string
    public phoneNumber: string
    public emailAddress: string
    public role: string

    constructor(name: string, phoneNumber: string, emailAddress: string, role: string) {
        this.name = name
        this.phoneNumber = phoneNumber
        this.emailAddress = emailAddress
        this.role = role
    }
}

export class AddStaff {
    storeUser: StoreStaff

    constructor(storestaff: StoreStaff) {
        this.storeUser = storestaff
    }
}

export class UpdateStaff {
    storestaff: UpdateStoreStaff

    constructor(storestaff: UpdateStoreStaff) {
        this.storestaff = storestaff
    }
}

export class RemoveStaff {
    storeUser: UpdateStoreStaff

    constructor(storestaff: UpdateStoreStaff) {
        this.storeUser = storestaff
    }
}

export class GetStaff {
    // userInfo: UserInfo

    // constructor(userInfo: UserInfo) {
    //     this.userInfo = userInfo
    // }
}