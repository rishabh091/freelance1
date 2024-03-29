import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { ApiService as Api } from '../api/auth.service';
import {
  AboutStore,
  StoreAddress,
  StorePayment,
  StoreTimings,
  UpdateAboutStore,
  UpdateAddressModule,
  UpdateContactInfo,
  UpdateContactInfoModule,
  UpdateName,
  UpdatePaymentModule,
  UpdateStoreTimings,
  UserInfo,
} from '../interface/auth.interface';
import {
  UpdateCategory,
  UpdateCategoryModule,
} from '../interface/category.interface';
import { StoreIdSchema } from '../interface/interface';
import { ServiceToasterService } from '../service-toaster.service';
import { ToasterComponent } from '../toaster/toaster.component';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public userInfoForm: FormGroup;
  public userInfoSubmitted = false;

  public addressForm: FormGroup;
  public addressFormSubmitted = false;

  public countries: any[];
  public states: any[];
  public cities: any[];

  public paymentForm: FormGroup;
  public paymentInfoSubmitted = false;

  public contactInfoForm: FormGroup;
  public contactInfoSubmitted = false;

  public storeTimingsForm: FormGroup;
  public storeTimingsSubmitted = false;

  public aboutStoreForm: FormGroup;
  public aboutStoreSubmitted = false;

  public updateCategoryForm: FormGroup;
  public updateCategorySubmitted = false;

  public showProfilePic: boolean = true;
  public profilePic: string =
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  public croppedImage: string;
  public imageChangedEvent: any;

  public spinner:boolean =  true;

  constructor(
    private formBuilder: FormBuilder,
    private api: Api,
    private toaster: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.userInfoForm = this.formBuilder.group({
      storeName: ['', Validators.required],
    });

    this.contactInfoForm = this.formBuilder.group({
      storePhoneNumber: ['', Validators.required],
      storeEmailAddress: ['', Validators.required],
    });

    this.addressForm = this.formBuilder.group({
      storeaddressBuilding: ['', Validators.required],
      storeaddressStreet: ['', Validators.required],
      storeaddressCity: ['', Validators.required],
      storeaddressPinCode: ['', Validators.required],
      storeaddressState: ['', Validators.required],
      storeaddressCountry: ['', Validators.required],
    });
    this.countries = Country.getAllCountries();

    this.paymentForm = this.formBuilder.group({
      acceptedCurrency: ['', Validators.required],
      paymentGatewayId: ['', Validators.required],
    });

    this.storeTimingsForm = this.formBuilder.group({
      opensAt: ['', Validators.required],
      closesAt: ['', Validators.required],
    });

    this.aboutStoreForm = this.formBuilder.group({
      aboutStore: ['', Validators.required],
    });

    this.updateCategoryForm = this.formBuilder.group({
      isPrePaid: [false, Validators.required],
      storeSubCategory: ['', Validators.required],
      isFoodServedToTable: [false, Validators.required],
    });

    this.getUser();
    this.getAddress();
    this.getContactInfo();
    this.getPaymentInfo();
    this.getStoreTimings();
    this.getAboutStore();
    this.getCategory();
    this.getProfilePic();
  }

  onProfilePicUpload(event) {
    this.imageChangedEvent = event;
    this.showProfilePic = false;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  dataURItoBlob(dataURI: any) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });
  }

  uploadProfilePic() {
    const imageBlob = this.dataURItoBlob(this.croppedImage);
    const file: File = new File([imageBlob], 'uploadImage', {
      type: 'image/png',
    });
    const formData = new FormData();
    formData.append('restaurantImage', file);
    formData.append(
      'phoneNumber',
      localStorage.getItem('phoneWithCountry').replace('+', '')
    );
    formData.append('imageType', 'profile');
    formData.append('imageDetail1', '1');
    this.api
      .uploadImage(formData)
      .then((res: any) => {
        this.showProfilePic = true;
        this.toaster.success('Profile Picture Updated');
      })
      .catch((error) => {
        // this.toaster.failure(error);
      });
  }

  onCountryChange(): void {
    this.states = State.getStatesOfCountry(
      this.addressForm.value.storeaddressCountry.isoCode
    );
  }
  onStateChange(): void {
    const countryCode = this.addressForm.value.storeaddressCountry.isoCode;
    const stateCode = this.addressForm.value.storeaddressState.isoCode;
    this.cities = City.getCitiesOfState(countryCode, stateCode);
  }

  getUser(): void {
    const storeId = localStorage.getItem('storeId');

    const payload = new StoreIdSchema(storeId);
    this.api
      .getStore(payload)
      .then((res: any) => {
        this.spinner = false;
        this.userInfoForm.controls['storeName'].setValue(res.storeName);
      })
      .catch((error) => {
        this.spinner = false;
        this.toaster.failure(error);
      });
  }

  getProfilePic() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getStoreProfilePic(new StoreIdSchema(storeId))
      .then((res: any) => {
        if (res.storeProfilePic1URL) {
          this.profilePic = this.api.getImageUrl(res.storeProfilePic1URL);
        }
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getAddress(): void {
    const storeId = localStorage.getItem('storeId');

    const payload = new StoreIdSchema(storeId);
    this.api
      .getAddress(payload)
      .then((res: any) => {
        console.log(res)
        const countryObject = this.countries.filter((value) => {
          return value.name === res.storeAddress.storeAddressCountry;
        });

        this.states = State.getStatesOfCountry(countryObject[0].isoCode);
        const stateObject = this.states.filter((value) => {
          return value.name === res.storeAddress.storeAddressState;
        });

        this.cities = City.getCitiesOfState(
          countryObject[0].isoCode,
          stateObject[0].isoCode
        );
        const cityObject = this.cities.filter((value) => {
          return value.name === res.storeAddress.storeAddressCity;
        });

        this.addressForm.controls['storeaddressBuilding'].setValue(
          res.storeAddress.storeAddressBuilding
        )
        this.addressForm.controls['storeaddressStreet'].setValue(
          res.storeAddress.storeAddressStreet
        );
        this.addressForm.controls['storeaddressCity'].setValue(cityObject[0]);
        this.addressForm.controls['storeaddressPinCode'].setValue(
          res.storeAddress.storeAddressPinCode
        );
        this.addressForm.controls['storeaddressState'].setValue(stateObject[0]);
        this.addressForm.controls['storeaddressCountry'].setValue(
          countryObject[0]
        );
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getContactInfo(): void {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getContactInfo(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.contactInfoForm.controls['storeEmailAddress'].setValue(
          res.storeEmailAddress
        );
        this.contactInfoForm.controls['storePhoneNumber'].setValue(
          res.storePhoneNumber
        );
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getPaymentInfo(): void {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getPaymentInfo(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.paymentForm.controls['acceptedCurrency'].setValue(
          res.acceptedCurrency
        );
        this.paymentForm.controls['paymentGatewayId'].setValue(
          res.paymentGatewayID
        );
        this.updateCategoryForm.controls['isPrePaid'].setValue(res.isPrePaid);
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getCategory() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getCategory(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.updateCategoryForm.controls['storeSubCategory'].setValue(
          res['serviceType']
        );
        this.updateCategoryForm.controls['isFoodServedToTable'].setValue(
          res['isFoodServedToTable']
        );
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  getStoreTimings(): void {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getStoreTimings(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.storeTimingsForm.controls['opensAt'].setValue(
          this.convert12To24(res.opensAt)
        );
        this.storeTimingsForm.controls['closesAt'].setValue(
          this.convert12To24(res.closesAt)
        );
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }

  convert24To12(timeString: string) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ':' + minute + (hour < 12 ? ' AM' : ' PM');
  }

  convert12To24(time12h: string) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      let hours24 = parseInt(hours, 10) + 12;
      if (hours24 < 10) {
        hours = `0${hours24}`;
      } else {
        hours = hours24 + '';
      }
    }

    if (parseInt(hours) < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
  }

  getAboutStore(): void {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getStoreAbout(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.aboutStoreForm.controls['aboutStore'].setValue(res.aboutStore);
      })
      .catch((error) => {
        this.toaster.failure(error);
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

  get contactInfo(): { [key: string]: AbstractControl } {
    return this.contactInfoForm.controls;
  }

  get storeTimings(): { [key: string]: AbstractControl } {
    return this.storeTimingsForm.controls;
  }

  get aboutStoreInfo(): { [key: string]: AbstractControl } {
    return this.aboutStoreForm.controls;
  }

  get updateCategoryFormControls(): { [key: string]: AbstractControl } {
    return this.updateCategoryForm.controls;
  }

  userFormSubmit(): void {
    this.userInfoSubmitted = true;
    if (this.userInfoForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    this.api
      .updateName(
        new UpdateName(
          this.userInfoForm.value.storeName,
          new UserInfo(phoneNumber)
        )
      )
      .then((res) => {
        this.toaster.success('Name Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update Name');
      });
  }

  addressFormSubmit(): void {
    this.addressFormSubmitted = true;
    if (this.addressForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateAddressModule(
      new StoreAddress(
        this.addressForm.value.storeaddressBuilding,
        this.addressForm.value.storeaddressStreet,
        this.addressForm.value.storeaddressCity.name,
        String(this.addressForm.value.storeaddressPinCode),
        this.addressForm.value.storeaddressState.name,
        this.addressForm.value.storeaddressCountry.name
      )
    );

    this.api
      .updateAddress(payload)
      .then((res) => {
        this.toaster.success('Address Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update Address');
      });
  }

  paymentFormSubmit(): void {
    this.paymentInfoSubmitted = true;
    if (this.paymentForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdatePaymentModule(
      new UserInfo(phoneNumber),
      new StorePayment(
        this.paymentForm.value.acceptedCurrency,
        this.paymentForm.value.paymentGatewayId
      )
    );
    this.api
      .updatePayment(payload)
      .then((res) => {
        this.toaster.success('Payment Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update Payment');
      });
  }

  updateContactInfo(): void {
    this.contactInfoSubmitted = true;
    if (this.contactInfoForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateContactInfoModule(
      new UpdateContactInfo(
        this.contactInfoForm.value.storePhoneNumber,
        this.contactInfoForm.value.storeEmailAddress
      )
    );

    this.api
      .updateContactInfo(payload)
      .then((res) => {
        this.toaster.success('ContactInfo Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update ContactInfo');
      });
  }

  updateStoreTimings(): void {
    this.storeTimingsSubmitted = true;
    if (this.storeTimingsForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateStoreTimings(
      new UserInfo(phoneNumber),
      new StoreTimings(
        this.convert24To12(this.storeTimingsForm.value.opensAt),
        this.convert24To12(this.storeTimingsForm.value.closesAt)
      )
    );

    this.api
      .updateStoreTimings(payload)
      .then((res) => {
        this.toaster.success('StoreTimings Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update StoreTimings');
      });
  }

  updateAboutStore(): void {
    this.aboutStoreSubmitted = true;
    if (this.aboutStoreForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateAboutStore(
      new UserInfo(phoneNumber),
      new AboutStore(this.aboutStoreForm.value.aboutStore)
    );

    this.api
      .updateStoreAbout(payload)
      .then((res) => {
        this.toaster.success('StoreAbout Updated');
      })
      .catch((error) => {
        this.toaster.failure('Cannot update StoreAbout');
      });
  }

  updateCategory(): void {
    this.updateCategorySubmitted = true;
    if (this.updateCategoryForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateCategory(
      new UserInfo(phoneNumber),
      new UpdateCategoryModule(
        this.updateCategoryForm.value.storeSubCategory,
        this.updateCategoryForm.value.isPrePaid,
        !this.updateCategoryForm.value.isPrePaid
      )
    );

    this.api
      .updateCategory(payload)
      .then((res) => {
        this.toaster.success('Store Prepaid Updated!');
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }
}
