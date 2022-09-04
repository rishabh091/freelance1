import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { UpdateCategory, UpdateCategoryModule } from '../interface/category.interface';
import { MenuItem } from '../interface/interface';
import { MockResturantMenus, MockMenuGroups } from '../mock.menu'   // dummy data
import { AuthService as Api } from '../api/auth.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private api: Api) {}

  public editForm: FormGroup
  public submitted: boolean = false

  public menuGroups = MockMenuGroups[0]
  public restaurantMenu = MockResturantMenus[0]

  public updateCategoryForm: FormGroup
  public updateCategorySubmitted = false

  public expand = []

  ngOnInit(): void {
    // move it to api from where menu is coming
    this.expand = this.menuGroups.map((obj) => {
      return true;
    });

    this.editForm = this.formBuilder.group({
      ItemName: ['', Validators.required],
      ItemType: ['', Validators.required],
      Price: [0, Validators.required],
      Discount: [0],
      AvailableNow: [false, Validators.required],
      NextAvailableTime: [new Date(), Validators.required],
      DisplayImagePath: ['']
    })

    this.restaurantMenu = this.mapRestaurantWithId(this.restaurantMenu)

    this.updateCategoryForm = this.formBuilder.group({
      storeSubCategory: ['', Validators.required],
      isPrePaid: [false, Validators.required],
      isFoodServedToTable: [false, Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editForm.controls
  }

  get updateCategoryFormControls(): { [key: string]: AbstractControl } {
    return this.updateCategoryForm.controls
  }

  expandMenu(index: number): void {
    this.expand[index] = !this.expand[index];
  }

  editProduct(): void {
    this.submitted = true
    if (this.editForm.invalid) {
      return
    }
    console.log(JSON.stringify(this.editForm.value, null, 2));
  }

  mapRestaurantWithId(restaurantMenu: typeof MockResturantMenus[0]): any {
    let menu = {}
    for (let obj of restaurantMenu) {
      menu[obj.ItemID] = obj
    }

    return menu
  }

  openEditModal(editObject: MenuItem) {
    console.log(editObject)
    this.editForm.controls['ItemName'].setValue(editObject.ItemName)
    this.editForm.controls['ItemType'].setValue(editObject.ItemType)
    this.editForm.controls['Price'].setValue(editObject.Price)
    this.editForm.controls['Discount'].setValue(editObject.Discount)
    this.editForm.controls['AvailableNow'].setValue(editObject.AvailableNow)
    this.editForm.controls['NextAvailableTime'].setValue(new Date(editObject.NextAvailableTime).toISOString().substring(0, 16))
    this.editForm.controls['DisplayImagePath'].setValue(editObject.DisplayImagePath)
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
}
