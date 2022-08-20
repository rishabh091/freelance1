import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService as AuthApiService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { AddMenuItem, MenuInfo } from '../interface/item.interface';

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

  constructor(private formBuilder: FormBuilder, private api: AuthApiService) {}
 
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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.weekDayAvailability.map(available => { if(available) this.weekDayAvailabilityError = false })
    this.form.value.availableFrom = this.convertToSeconds(this.form.value.availableFrom)
    this.form.value.availableTill = this.convertToSeconds(this.form.value.availableTill)

    console.log(this.weekDayAvailability)
    console.log(JSON.stringify(this.form.value, null, 2));

    const phoneNumber = localStorage.getItem('phone')
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

      this.api.addMenuItem(payload).then(res => {console.log('success')}).catch(error => {console.log(error)})
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
