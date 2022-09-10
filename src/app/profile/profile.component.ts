import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, State, City }  from 'country-state-city';
import { AuthService as Api } from '../api/auth.service';
import { AboutStore, StoreAddress, StorePayment, StoreTimings, UpdateAboutStore, UpdateAddressModule, UpdateContactInfo, UpdateContactInfoModule, UpdateName, UpdatePaymentModule, UpdateStoreTimings, UserInfo } from '../interface/auth.interface';

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

  public contactInfoForm: FormGroup
  public contactInfoSubmitted = false

  public storeTimingsForm: FormGroup
  public storeTimingsSubmitted = false

  public aboutStoreForm: FormGroup
  public aboutStoreSubmitted = false

  constructor(private formBuilder: FormBuilder, private api: Api) { }

  ngOnInit(): void {
    this.userInfoForm = this.formBuilder.group({
      storeName: ['', Validators.required],
    });

    this.contactInfoForm = this.formBuilder.group({
      storePhoneNumber: ['', Validators.required],
      storeEmailAddress: ['', Validators.required]
    })

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
      paymentGatewayId: ['', Validators.required]
    });

    this.storeTimingsForm = this.formBuilder.group({
      opensAt: ['', Validators.required],
      closesAt: ['', Validators.required]
    })

    this.aboutStoreForm = this.formBuilder.group({
      aboutStore: ['', Validators.required]
    })

    this.getUser()
    this.getAddress()
    this.getContactInfo()
    this.getPaymentInfo()
    this.getStoreTimings()
    this.getAboutStore()
  }

  onCountryChange(): void {
    this.states = State.getStatesOfCountry(this.addressForm.value.storeaddressCountry.isoCode)
  }
  onStateChange(): void {
    const countryCode = this.addressForm.value.storeaddressCountry.isoCode
    const stateCode = this.addressForm.value.storeaddressState.isoCode
    this.cities = City.getCitiesOfState(countryCode, stateCode)
  }

  getUser(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getStore(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  getAddress(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getAddress(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  getContactInfo(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getContactInfo(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  getPaymentInfo(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getPaymentInfo(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  getStoreTimings(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getStoreTimings(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  getAboutStore(): void {
    const storeId = localStorage.getItem('storeId')
    this.api.getStoreAbout(storeId).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
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

  get contactInfo(): { [key: string]: AbstractControl } {
    return this.contactInfoForm.controls;
  }

  get storeTimings(): { [key: string]: AbstractControl } {
    return this.storeTimingsForm.controls;
  }

  get aboutStoreInfo(): { [key: string]: AbstractControl } {
    return this.aboutStoreForm.controls
  }

  userFormSubmit(): void {
    this.userInfoSubmitted = true;
    if (this.userInfoForm.invalid) {
      return;
    }

    const phoneNumber = localStorage.getItem('phone')
    this.api.updateName(new UpdateName(this.userInfoForm.value.storeName, new UserInfo(phoneNumber))).then(res => {
      console.log(res)
    }).catch(error => {console.log(error)})
  }

  addressFormSubmit(): void {
    this.addressFormSubmitted = true;
    if (this.addressForm.invalid) {
      return;
    }

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateAddressModule(new UserInfo(phoneNumber), new StoreAddress(
      this.addressForm.value.storeaddressBuilding,
      this.addressForm.value.storeaddressStreet,
      this.addressForm.value.storeaddressCity.name,
      String(this.addressForm.value.storeaddressPinCode),
      this.addressForm.value.storeaddressState.name,
      this.addressForm.value.storeaddressCountry.name
    ))

    this.api.updateAddress(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  paymentFormSubmit(): void {
    this.paymentInfoSubmitted = true;
    if (this.paymentForm.invalid) {
      return;
    }

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdatePaymentModule(new UserInfo(phoneNumber), new StorePayment(
      this.paymentForm.value.acceptedCurrency,
      this.paymentForm.value.paymentGatewayId
    ))
    this.api.updatePayment(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateContactInfo(): void {
    this.contactInfoSubmitted = true
    if (this.contactInfoForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateContactInfoModule(new UserInfo(phoneNumber), new UpdateContactInfo(
      this.contactInfoForm.value.storePhoneNumber,
      this.contactInfoForm.value.storeEmailAddress
    ))

    this.api.updateContactInfo(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateStoreTimings(): void {
    this.storeTimingsSubmitted = true
    if (this.storeTimingsForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateStoreTimings(new UserInfo(phoneNumber), new StoreTimings(
      this.storeTimingsForm.value.opensAt,
      this.storeTimingsForm.value.closesAt
    ))

    this.api.updateStoreTimings(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateAboutStore(): void {
    this.aboutStoreSubmitted = true
    if (this.aboutStoreForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateAboutStore(new UserInfo(phoneNumber), new AboutStore(this.aboutStoreForm.value.aboutStore))

    this.api.updateStoreAbout(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }
}
