import { UserInfo } from "./auth.interface"

export class CreateTableInfo {
    zone: string
    startTableNumber: number
    endTableNumber: number

    constructor(zone: string, startTableNumber: number, endTableNumber: number) {
        this.zone = zone
        this.startTableNumber = startTableNumber
        this.endTableNumber = endTableNumber
    }
}

export class RemoveTableInfo {
    zone: string

    constructor(zone: string) {
        this.zone = zone
    }
}

export class CreateZone {
    userInfo: UserInfo
    tableInfo: CreateTableInfo

    constructor(userInfo: UserInfo, tableInfo: CreateTableInfo) {
        this.userInfo = userInfo
        this.tableInfo = tableInfo
    }
}

export class RemoveZone {
    userInfo: UserInfo
    tableInfo: RemoveTableInfo
    
    constructor(userInfo: UserInfo, tableInfo: RemoveTableInfo) {
        this.userInfo = userInfo
        this.tableInfo = tableInfo
    }
}