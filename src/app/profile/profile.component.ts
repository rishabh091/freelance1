import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public userInfoForm: FormGroup
  public userInfoSubmitted = false
  
  public addressForm: FormGroup
  public addressFormSubmitted = false
  public countries: any[]
  public states: any[]
  public cities: any[]

  public paymentForm: FormGroup
  public paymentInfoSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userInfoForm = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      storeName: ['', Validators.required],
      emailAddress: ['', Validators.required]
    });

    this.addressForm = this.formBuilder.group({
      storeaddressBuilding: ['', Validators.required],
      storeaddressStreet: ['', Validators.required],
      storeaddressCity: ['', Validators.required],
      storeaddressPinCode: ['', Validators.required],
      storeaddressState: ['', Validators.required],
      storeaddressCountry: ['', Validators.required]
    });
    this.countries = Country.getAllCountries()

    this.paymentForm = this.formBuilder.group({
      acceptedCurrency: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifcsCode: ['', Validators.required],
      accountHolderName: ['', Validators.required],
    });
  }

  get userInfo(): { [key: string]: AbstractControl } {
    return this.userInfoForm.controls;
  }

  get addressInfo(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }

  get paymentInfo(): { [key: string]: AbstractControl } {
    return this.paymentForm.controls;
  }

  userFormSubmit(): void {
    this.userInfoSubmitted = true;
    if (this.userInfoForm.invalid) {
      return;
    }
  }

  addressFormSubmit(): void {
    this.addressFormSubmitted = true;
    if (this.addressForm.invalid) {
      return;
    }
  }

  paymentFormSubmit(): void {
    this.paymentInfoSubmitted = true;
    if (this.paymentForm.invalid) {
      return;
    }
  }

}
