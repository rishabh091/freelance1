import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { ActivatedRoute } from '@angular/router';
import {
  UpdateAddressModule,
  UserInfo,
  StoreAddress,
} from 'src/app/interface/auth.interface';
import { ApiService as ApiAuthService } from 'src/app/api/auth.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ServiceToasterService } from 'src/app/service-toaster.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public countries: any[];
  public states: any[];
  public cities: any[];
  private phoneNumber: string;

  public spinner:boolean =  true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiAuthService: ApiAuthService,
    private auth: AuthService,
    private router: Router,
    public toasterService: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      storeaddressBuilding: ['', Validators.required],
      storeaddressStreet: ['', Validators.required],
      storeaddressCity: ['', Validators.required],
      storeaddressPinCode: ['', Validators.required],
      storeaddressState: ['', Validators.required],
      storeaddressCountry: ['', Validators.required],
    });

    this.countries = Country.getAllCountries();
    this.phoneNumber = this.route.snapshot.paramMap
      .get('phoneNumber')
      .replace('+', '');
    this.spinner = false;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const payload = new UpdateAddressModule(
      new StoreAddress(
        this.form.value.storeaddressBuilding,
        this.form.value.storeaddressStreet,
        this.form.value.storeaddressCity.name,
        this.form.value.storeaddressPinCode + '',
        this.form.value.storeaddressState.name,
        this.form.value.storeaddressCountry.name
      )
    );

    this.apiAuthService
      .updateAddress(payload)
      .then((res) => {
        this.toasterService.success('');
        this.router.navigate(['/signup/payment/' + this.phoneNumber]);
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }

  onCountryChange(): void {
    this.states = State.getStatesOfCountry(
      this.form.value.storeaddressCountry.isoCode
    );
  }
  onStateChange(): void {
    const countryCode = this.form.value.storeaddressCountry.isoCode;
    const stateCode = this.form.value.storeaddressState.isoCode;
    this.cities = City.getCitiesOfState(countryCode, stateCode);
  }
}
