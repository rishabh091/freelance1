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


export class RemoveMenuCategory {
	userInfo: UserInfo
	menuinfo: MenuInfo

	constructor(userInfo: UserInfo, menuinfo: MenuInfo) {
		this.userInfo = userInfo
		this.menuinfo = menuinfo
	}
 }

 export class MenuInfo {
	menuCategory: string

	constructor(menuCategory: string) {
		this.menuCategory = menuCategory
	}
 }

 export class UpdateMenuItemPrice {
    userInfo: UserInfo
    menuInfo: MenuItemPrice

    constructor(userInfo: UserInfo, menuInfo: MenuItemPrice) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
 }
 export class MenuItemPrice {
    menuCategory: string
    menuSubCategory: string
    menuItem: string
    itemPrice: number

    constructor(menuCategory: string, menuSubCategory: string, menuItem: string, itemPrice: number) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
        this.menuItem = menuItem
        this.itemPrice = itemPrice
    }
 }

 export class MenuItemCurrentAvailability {
    menuCategory: string
    menuSubCategory: string
    menuItem: string
    currentAvailiblity: boolean

    constructor(menuCategory: string, menuSubCategory: string, menuItem: string, currentAvailability: boolean) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
        this.menuItem = menuItem
        this.currentAvailiblity = currentAvailability
    }
 }

 export class UpdateItemCurrentAvailability {
    userInfo: UserInfo
    menuInfo: MenuItemCurrentAvailability

    constructor(userInfo: UserInfo, menuInfo: MenuItemCurrentAvailability) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
 }

export class ItemDailyAvailability {
    menuCategory: string
    menuSubCategory: string
    menuItem: string
    availableFrom: number
    availableTill: number
    weekDayAvailblity: boolean[]

    constructor(menuCategory: string, menuSubCategory: string, menuItem: string, availableFrom: number, availableTill: number, weekDayAvailblity: boolean[]) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
        this.menuItem = menuItem
        this.availableFrom = availableFrom
        this.availableTill = availableTill
        this.weekDayAvailblity = weekDayAvailblity
    }
}

export class UpdateMenuItemDailyAvailability {
    userInfo: UserInfo
    menuInfo: ItemDailyAvailability

    constructor(userInfo: UserInfo, menuInfo: ItemDailyAvailability) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
}

export class SubMenuCategories {
    storeID: string
    menu: string

    constructor(storeID: string, menu: string) {
        this.storeID = storeID
        this.menu = menu
    }
}

export class CategoryImageInfo {
    userInfo: UserInfo
    menuInfo: MenuCategoryImage

    constructor(userInfo: UserInfo, menuInfo: MenuCategoryImage) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
}

export class MenuCategoryImage {
    menuCategory: string
    menuSubCategory: string

    constructor(menuCategory: string, menuSubCategory: string) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
    }
}