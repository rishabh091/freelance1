import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { AddSubCategory, AddSubCategoryMenuInfo, ItemDailyAvailability, MenuInfo, MenuItemCurrentAvailability, MenuItemPrice, RemoveMenuCategory, UpdateCategory, UpdateCategoryModule, UpdateItemCurrentAvailability, UpdateMenuItemDailyAvailability, UpdateMenuItemPrice } from '../interface/category.interface';
import { MenuItem, StoreIdSchema } from '../interface/interface';
import { MockResturantMenus, MockMenuGroups } from '../mock.menu'   // dummy data
import { AuthService as Api } from '../api/auth.service';
import { RemoveMenuItem, RemoveMenuItemModule } from '../interface/item.interface';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private api: Api) {}

  public menuItemForm: FormGroup
  public submitted: boolean = false

  public menuGroups = []
  public subMenuGroups = {}
  public menuItems = {}

  public updateCategoryForm: FormGroup
  public updateCategorySubmitted = false

  public subMenuCategoryForm: FormGroup
  public subMenuSubmitted = false

  public category: string = ''
  public subCategory: string = ''

  weekDayAvailability: boolean[] = [false, false, false, false, false, false, false]
  weekDayAvailabilityError = true

  public expand = []

  ngOnInit(): void {
    // move it to api from where menu is coming
    this.expand = this.menuGroups.map((obj) => {
      return true;
    });

    this.menuItemForm = this.formBuilder.group({
      ItemName: ['', Validators.required],
      ItemType: ['', Validators.required],
      Price: [0, Validators.required],
      Discount: [0],
      AvailableNow: [false, Validators.required],
      NextAvailableTime: [new Date(), Validators.required],
      DisplayImagePath: ['']
    })

    this.updateCategoryForm = this.formBuilder.group({
      storeSubCategory: ['', Validators.required],
      isPrePaid: [false, Validators.required],
      isFoodServedToTable: [false, Validators.required]
    })

    this.subMenuCategoryForm = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      menuSubCategory: ['', Validators.required],
      imageURL: ['', Validators.required]
    })

    this.getMenuItem()
  }

  getMenuCategory() {
    const storeId = localStorage.getItem('storeId')
    this.api.getMenuItems(new StoreIdSchema(storeId)).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  getMenuItem() {
    const storeId = localStorage.getItem('storeId')
    this.api.getMenuItems(new StoreIdSchema(storeId)).then(res => {
      this.menuGroups = res['menuItems'].map(obj => { return obj.menu })

      for (let menu of this.menuGroups) {
        this.subMenuGroups[menu] = []
        this.menuItems[menu] = {}
      }

      for (let item of res['menuItems']) {
        this.subMenuGroups[item.menu].push(item.subMenu)
        this.menuItems[item.menu][item.subMenu] = []
      }
      for (let item of res['menuItems']) {
        this.menuItems[item.menu][item.subMenu].push(item)
      }

      console.log(this.menuGroups)
      console.log(this.subMenuGroups)
      console.log(this.menuItems)
    }).catch(error => { console.log(error) })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.menuItemForm.controls
  }

  get subCategoryControls(): { [key: string]: AbstractControl } {
    return this.subMenuCategoryForm.controls
  }

  get updateCategoryFormControls(): { [key: string]: AbstractControl } {
    return this.updateCategoryForm.controls
  }

  expandMenu(index: number): void {
    this.expand[index] = !this.expand[index];
  }

  editProduct(): void {
    this.submitted = true
    if (this.menuItemForm.invalid) {
      return
    }

    this.weekDayAvailability.map(available => { if(available) this.weekDayAvailabilityError = false })
    this.menuItemForm.value.availableFrom = this.convertToSeconds(this.menuItemForm.value.availableFrom)
    this.menuItemForm.value.availableTill = this.convertToSeconds(this.menuItemForm.value.availableTill)
    
    const phoneNumber = localStorage.getItem('phone')
    const pricePayload = new UpdateMenuItemPrice(new UserInfo(phoneNumber), new MenuItemPrice(
      this.category,
      this.subCategory,
      this.menuItemForm.value.ItemName,
      this.menuItemForm.value.Price
    ))

    const currentAvailabilityPayload = new UpdateItemCurrentAvailability(new UserInfo(phoneNumber), new MenuItemCurrentAvailability(
      this.category,
      this.subCategory,
      this.menuItemForm.value.ItemName,
      this.menuItemForm.value.AvailableNow
    ))

    const dailyAvailabilityPayload = new UpdateMenuItemDailyAvailability(new UserInfo(phoneNumber), new ItemDailyAvailability(
      this.category,
      this.subCategory,
      this.menuItemForm.value.ItemName,
      this.menuItemForm.value.availableFrom,
      this.menuItemForm.value.availableTill,
      this.weekDayAvailability
    ))

    this.api.updateMenuItemPrice(pricePayload).then(res => { console.log(res) }).catch(error => { console.log(error) })
    this.api.updateMenuItemCurrentAvailability(currentAvailabilityPayload).then(res => { console.log(res) }).catch(error => { console.log(error) })
    this.api.updateMenuItemDailyAvailability(dailyAvailabilityPayload).then(res => { console.log(res) }).catch(error => { console.log(error) })

  }

  convertToSeconds(time: string): number {
    const hoursAndMin = time.split(":")
    if (hoursAndMin.length < 2) return parseInt(time)

    const hoursInSec = parseInt(hoursAndMin[0]) * 60 * 60
    const minutesInSec = parseInt(hoursAndMin[1]) * 60
    return hoursInSec + minutesInSec
  }

  openEditModal(editObject: MenuItem) {
    this.menuItemForm.controls['ItemName'].setValue(editObject.ItemName)
    this.menuItemForm.controls['ItemType'].setValue(editObject.ItemType)
    this.menuItemForm.controls['Price'].setValue(editObject.Price)
    this.menuItemForm.controls['Discount'].setValue(editObject.Discount)
    this.menuItemForm.controls['AvailableNow'].setValue(editObject.AvailableNow)
    this.menuItemForm.controls['NextAvailableTime'].setValue(new Date(editObject.NextAvailableTime).toISOString().substring(0, 16))
    this.menuItemForm.controls['DisplayImagePath'].setValue(editObject.DisplayImagePath)
  }

  updateCategory(): void {
    this.updateCategorySubmitted = true
    if (this.updateCategoryForm.invalid) {
      return
    }

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateCategory(new UserInfo(phoneNumber), new UpdateCategoryModule(
      this.updateCategoryForm.value.storeSubCatagory,
      this.updateCategoryForm.value.isPrePaid,
      this.updateCategoryForm.value.isFoodServedToTable
    ))

    this.api.updateCategory(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  getCategories() {
    const storeId = localStorage.getItem('storeId')
    this.api.getCategory(new StoreIdSchema(storeId)).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  removeCategory(category: string) {
    const phoneNumber = localStorage.getItem('phone')
    this.api.removeMenuCategory(new RemoveMenuCategory(new UserInfo(phoneNumber), new MenuInfo(category)))
    .then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  removeMenuItem(category: string, subCategory: string, menuItem: string) {
    const phoneNumber = localStorage.getItem('phone')
    this.api.removeMenuItem(new RemoveMenuItemModule(new UserInfo(phoneNumber), new RemoveMenuItem(
      category, subCategory, menuItem
    ))).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  removeSubCategory(category: string, subCategory: string, imageUrl: string) {
    const phoneNumber = localStorage.getItem('phone')
    this.api.removeMenuSubCategory(new AddSubCategory(new UserInfo(phoneNumber), new AddSubCategoryMenuInfo(category, subCategory, imageUrl)))
    .then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateSubCategory() {
    this.subMenuSubmitted = true
    if (this.subMenuCategoryForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new AddSubCategory(new UserInfo(phoneNumber), new AddSubCategoryMenuInfo(
      this.subMenuCategoryForm.value.menuCategory,
      this.subMenuCategoryForm.value.menuSubCategory,
      this.subMenuCategoryForm.value.imageURL
    ))

    this.api.updateMenuSubCategory(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }
}
