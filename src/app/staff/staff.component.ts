import { Component, OnInit } from '@angular/core';
import {
  AddStaff,
  GetStaff,
  RemoveStaff,
  StoreStaff,
  UpdateStaff,
  UpdateStoreStaff,
} from '../interface/staff.interface';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService as AuthApiService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { ServiceToasterService } from '../service-toaster.service';
import { Data } from '../countryCodes.data';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  staff: StoreStaff[] = [];

  addStaffForm: FormGroup;
  addStaffSubmitted = false;

  updateStaffForm: FormGroup;
  updateStaffSubmitted = false;

  countryData = new Data();

  public spinner:boolean =  true;

  constructor(
    private formBuilder: FormBuilder,
    private api: AuthApiService,
    public toasterService: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.addStaffForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      emailAddress: ['', Validators.required],
      countryCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.updateStaffForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.getStaff();
  }

  get addStaffFunction(): { [key: string]: AbstractControl } {
    return this.addStaffForm.controls;
  }
  get updateStaffFunction(): { [key: string]: AbstractControl } {
    return this.updateStaffForm.controls;
  }

  getStaff(): void {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new GetStaff(new UserInfo(phoneNumber));

    this.api
      .getStaff(payload)
      .then((res: any) => {
        this.staff = res.storestaff;
        this.spinner = false;
      })
      .catch((error) => {
        this.spinner = false;
        this.toasterService.failure(error);
      });
  }

  addStaff(): void {
    this.addStaffSubmitted = true;
    if (this.addStaffForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new AddStaff(
      new UserInfo(phoneNumber),
      new StoreStaff(
        this.addStaffForm.value.name,
        this.addStaffForm.value.role,
        this.addStaffForm.value.countryCode +
          this.addStaffForm.value.phoneNumber +
          '',
        this.addStaffForm.value.emailAddress
      )
    );

    this.api
      .addStaff(payload)
      .then((res: any) => {
        if (res.status == 'user added sucessfully') {
          this.addStaffForm.reset();
          this.addStaffSubmitted = false;
          this.toasterService.success('You have added the staff successfully!');
          this.getStaff();
        }
      })
      .catch((error) => {
        this.toasterService.failure('Error in adding the staff!');
      });
  }

  editStaff(index: number): void {
    const staff = this.staff[index];
    this.updateStaffForm.controls['name'].setValue(staff.name);
    this.updateStaffForm.controls['role'].setValue(staff.role);
    this.updateStaffForm.controls['phoneNumber'].setValue(
      staff.phoneNumber.replace('+', '')
    );
    this.updateStaffForm.controls['emailAddress'].setValue(staff.emailAddress);
  }

  updateStaff(): void {
    this.updateStaffSubmitted = true;
    if (this.updateStaffForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateStaff(
      new UserInfo(phoneNumber),
      new UpdateStoreStaff(
        this.updateStaffForm.value.name,
        this.updateStaffForm.value.role[0],
        this.updateStaffForm.value.phoneNumber + '',
        this.updateStaffForm.value.emailAddress
      )
    );

    this.api
      .updateStaff(payload)
      .then((res: any) => {
        this.toasterService.success('You have updated the staff successfully!');
        this.getStaff();
      })
      .catch((error) => {
        this.toasterService.failure('Error in updating the staff!');
      });
  }

  removeStaff(index: number): void {
    const staff = this.staff[index];
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');

    const payload = new RemoveStaff(
      new UserInfo(phoneNumber),
      new UpdateStoreStaff(
        staff.name,
        staff.role[0],
        staff.phoneNumber,
        staff.emailAddress
      )
    );

    this.api
      .removeStaff(payload)
      .then((res: any) => {
        this.toasterService.success('You have removed the staff successfully!');
        this.getStaff();
      })
      .catch((error) => {
        this.toasterService.failure('Error in removing the staff!');
      });
  }
}
