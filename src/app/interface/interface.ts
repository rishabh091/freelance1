import { StarRating } from "../enums/orders.enum";
import { UserInfo } from "./auth.interface";

export interface MenuItem {
    ItemID: number;
    Price : number;
    ItemName :string;
    ItemType: string;          //veg, non-veg stc
    Discount: number;
    AvailableNow : boolean;
    NextAvailableTime: Date;
    DisplayImagePath: String;
    Rating: StarRating;   
};

export interface MenuSubGroup  {
    SubGroupID : number; 
    SubGroupName: string;              
    FoodItemsIDs : number[];  
 };
 
 export interface MenuGroup {
   GroupID:  number;       
   GroupName: string;
   FoodSubGroupIDs : number[];
 };
 
 export class FullyOrganizedMenu {
   SubGroupID : number = -1; 
   SubGroupName: string = '';  
   SubGroupMenuItems :MenuItem[]= [];
 };
 
 export interface ResturantMenuItems {
   [resturantid : number] : MenuItem[];
 };
 
 export interface ResturantMenuItemGroups {
   [key : number] : MenuSubGroup[];
 };

export class StoreIdSchema {
	storeID: string

	constructor(storeID: string) {
		this.storeID = storeID
	}
}

export class MenuItemImage {
  userInfo: UserInfo
  menuInfo: MenuImageInfo

  constructor(userInfo: UserInfo, menuInfo: MenuImageInfo) {
    this.userInfo = userInfo
    this.menuInfo = menuInfo
  }
}

export class MenuImageInfo {
  menuItem: string

  constructor(menuItem: string) {
    this.menuItem = menuItem
  }
}