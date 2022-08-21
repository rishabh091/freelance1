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