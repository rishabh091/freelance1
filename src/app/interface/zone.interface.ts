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

export class ZoneSchema {
    // userInfo: UserInfo
    
    // constructor(userInfo: UserInfo) { this.userInfo = userInfo }
}

export class CreateZone {
    tableInfo: CreateTableInfo

    constructor(tableInfo: CreateTableInfo) {
        this.tableInfo = tableInfo
    }
}

export class RemoveZone {
    tableInfo: RemoveTableInfo
    
    constructor(tableInfo: RemoveTableInfo) {
        this.tableInfo = tableInfo
    }
}