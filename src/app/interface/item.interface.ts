import { UserInfo } from "./auth.interface"


export class AddMenuItem {
    userInfo: UserInfo
    menuInfo: MenuInfo

    constructor(userInfo: UserInfo, menuInfo: MenuInfo) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
}

export class MenuInfo {
    menuCategory: string
    menuSubCategory: string
    menuItem: string
    itemType: string
    itemURL: string
    itemPrice: number
    availableFrom: number
    availableTill: number
    weekDayAvailblity: boolean[]

    constructor(menuCategory: string, menuSubCategory: string, menuItem: string, itemType: string, itemURL: string,
        itemPrice: number, availableFrom: number, availableTill: number, weekDayAvailability: boolean[]) {
            this.menuCategory = menuCategory
            this.menuSubCategory = menuSubCategory
            this.menuItem = menuItem
            this.itemType = itemType
            this.itemURL = itemURL
            this.itemPrice = itemPrice
            this.availableFrom = availableFrom
            this.availableTill = availableTill
            this.weekDayAvailblity = weekDayAvailability
        }
}

export class RemoveMenuItemModule {
    userInfo: UserInfo
    menuInfo: RemoveMenuItem

    constructor(userInfo: UserInfo, menuInfo: RemoveMenuItem) {
        this.userInfo = userInfo
        this.menuInfo = menuInfo
    }
}

export class RemoveMenuItem {
    menuCategory: string
    menuSubCategory: string
    menuItem: string

    constructor(menuCategory: string, menuSubCategory: string, menuItem: string) {
        this.menuCategory = menuCategory
        this.menuSubCategory = menuSubCategory
        this.menuItem = menuItem
    }
}