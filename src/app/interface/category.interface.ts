import { UserInfo } from './auth.interface'

export class AddCategory {
    userInfo: UserInfo
    menuinfo: AddCategoryMenuInfo

    constructor(userInfo: UserInfo, menuInfo: AddCategoryMenuInfo) {
        this.userInfo = userInfo
        this.menuinfo = menuInfo
    }
}
export class AddCategoryMenuInfo {
    menuCategory: string
    
    constructor(menuCategory: string) {
        this.menuCategory = menuCategory
    }
}

export class AddSubCategory {
    userInfo: UserInfo
    menuInfo: AddSubCategoryMenuInfo

    constructor(userInfo: UserInfo, menuinfo: AddSubCategoryMenuInfo) {
        this.userInfo = userInfo
        this.menuInfo = menuinfo
    }
}

export class AddSubCategoryMenuInfo {
    menuCategory: string
    menuSubCategory: string
    imageURL: string

    constructor(menuCategory: string, menuSubCategory: string, imageUrl: string) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
        this.imageURL = imageUrl
    }
}

export class UpdateCategory {
    userInfo: UserInfo
    storeinfo: UpdateCategoryModule

    constructor(userInfo: UserInfo, storeInfo: UpdateCategoryModule) {
        this.userInfo = userInfo
        this.storeinfo = storeInfo
    }
}

export class UpdateCategoryModule {
    storeSubCatagory: string
    isPrePaid: boolean
    isFoodServedToTable: boolean

    constructor(storeSubCategory: string, isPrePaid: boolean, isFoodServedToTable: boolean) {
        this.storeSubCatagory = storeSubCategory
        this.isPrePaid = isPrePaid
        this.isFoodServedToTable = isFoodServedToTable
    }
}