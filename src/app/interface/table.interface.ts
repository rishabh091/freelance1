import { UserInfo } from "./auth.interface"

export class UpdateTableState {
    userInfo: UserInfo
    tableInfo: UpdateTableInfo

    constructor(userInfo: UserInfo, tableInfo: UpdateTableInfo) {
        this.userInfo = userInfo
        this.tableInfo = tableInfo
    }
}

export class UpdateTableInfo {
    zone: string
    tableNumber: number
    openTable: boolean
    forceClose: boolean

    constructor(zone: string, tableNumber: number, openTable: boolean, forceClose: boolean) {
        this.zone = zone
        this.tableNumber = tableNumber
        this.openTable = openTable
        this.forceClose = forceClose
    }
}

export class GetTableInfo {
    zone: string
    tableNumber: number

    constructor(zone: string, tableNumber: number) {
        this.zone = zone
        this.tableNumber = tableNumber
    }
}

export class GetTableState {
    userInfo: UserInfo
    tableInfo: GetTableInfo

    constructor(userInfo: UserInfo, tableInfo: GetTableInfo) {
        this.userInfo = userInfo
        this.tableInfo = tableInfo
    }
}

export class TableTransactions {
    userInfo: UserInfo
    tableNumber: number

    constructor(userInfo: UserInfo, tableNumber: number) {
        this.userInfo = userInfo
        this.tableNumber = tableNumber
    }
}

export class TableOrderMove {
    userInfo: UserInfo
    fromTableNumber: number
    toTableNumber: number

    constructor(userInfo: UserInfo, fromTableNumber: number, toTableNumber: number) {
        this.userInfo = userInfo
        this.fromTableNumber = fromTableNumber
        this.toTableNumber = toTableNumber
    }
}