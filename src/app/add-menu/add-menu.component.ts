import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService as AuthApiService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { SubMenuCategories } from '../interface/category.interface';
import { StoreIdSchema } from '../interface/interface';
import { AddMenuItem, MenuInfo } from '../interface/item.interface';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  weekDayAvailability: boolean[] = [false, false, false, false, false, false, false]
  weekDayAvailabilityError = true

  categories: string[]
  subCategories: string[]

  constructor(private formBuilder: FormBuilder, private api: AuthApiService, private toaster: ServiceToasterService) {}
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
        menuCategory: ['', Validators.required],
        menuSubCategory: ['', [Validators.required]],
        menuItem: ['', Validators.required],
        itemType: ['', Validators.required],
        itemURL :['', Validators.required],
        itemPrice :['', Validators.required],
        availableFrom: ['', Validators.required],
        availableTill: ['', Validators.required]
      })

      this.getCategory()
      this.getSubCategory()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  getCategory() {
    const storeId = localStorage.getItem('storeId')
    this.api.getMenuCategory(new StoreIdSchema(storeId)).then((res: {}) => {
      this.categories = res['menuCategories']
    }).catch(error => { console.log(error) })
  }

  getSubCategory() {
    const storeId = localStorage.getItem('storeId')
    const category = this.form.value.menuCategory

    const payload = new SubMenuCategories(storeId, category)
    this.api.getSubCategory(payload).then(res => {
      this.subCategories = res['menuSubCategories']
    }).catch(error => { console.log(error) })
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.weekDayAvailability.map(available => { if(available) this.weekDayAvailabilityError = false })
    this.form.value.availableFrom = this.convertToSeconds(this.form.value.availableFrom)
    this.form.value.availableTill = this.convertToSeconds(this.form.value.availableTill)

    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '')
    const payload = new AddMenuItem(new UserInfo(phoneNumber),
    new MenuInfo(this.form.value.menuCategory,
      this.form.value.menuSubCategory,
      this.form.value.menuItem,
      this.form.value.itemType,
      this.form.value.itemURL,
      this.form.value.itemPrice,
      this.form.value.availableFrom,
      this.form.value.availableTill,
      this.weekDayAvailability))

      this.api.addMenuItem(payload).then(res => {
        this.toaster.success('Item Added')
        this.form.reset()
        this.submitted = false
        this.weekDayAvailability = [false, false, false, false, false, false, false]
      }).catch(error => {
        this.toaster.failure('Error, Please try again later')
      })
  }

  convertToSeconds(time: string): number {
    const hoursAndMin = time.split(":")
    if (hoursAndMin.length < 2) return parseInt(time)

    const hoursInSec = parseInt(hoursAndMin[0]) * 60 * 60
    const minutesInSec = parseInt(hoursAndMin[1]) * 60
    return hoursInSec + minutesInSec
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
