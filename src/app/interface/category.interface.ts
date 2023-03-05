import { UserInfo } from './auth.interface'

export class AddCategory {
    menuInfo: AddCategoryMenuInfo

    constructor(menuInfo: AddCategoryMenuInfo) {
        this.menuInfo = menuInfo
    }
}
export class AddCategoryMenuInfo {
    menuCategory: string
    
    constructor(menuCategory: string) {
        this.menuCategory = menuCategory
    }
}

export class AddSubCategory {
    menuInfo: AddSubCategoryMenuInfo

    constructor(menuinfo: AddSubCategoryMenuInfo) {
        this.menuInfo = menuinfo
    }
}

export class AddSubCategoryMenuInfo {
    menuCategory: string
    menuSubCategory: string

    constructor(menuCategory: string, menuSubCategory: string) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
    }
}

export class UpdateCategory {
    userInfo: UserInfo
    storeInfo: UpdateCategoryModule

    constructor(userInfo: UserInfo, storeInfo: UpdateCategoryModule) {
        this.userInfo = userInfo
        this.storeInfo = storeInfo
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
    menuInfo: MenuItemPrice

    constructor(menuInfo: MenuItemPrice) {
        this.menuInfo = menuInfo
    }
 }
 export class MenuItemPrice {
    menuItem: string
    itemPrice: number

    constructor(menuItem: string, itemPrice: number) {
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