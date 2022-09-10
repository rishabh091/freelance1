import { UserInfo } from "./auth.interface";

export class GetOrders {
    userInfo: UserInfo
    orderType: string

    constructor(userInfo: UserInfo, orderType: string) {
        this.userInfo = userInfo
        this.orderType = orderType
    }
}

export class UpdateOrderStatus {
    userInfo: UserInfo
    orderID: string
    orderStatus: string

    constructor(userInfo: UserInfo, orderID: string, orderStatus: string) {
        this.userInfo = userInfo
        this.orderID = orderID
        this.orderStatus = orderStatus
    }
}