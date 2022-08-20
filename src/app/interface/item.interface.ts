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