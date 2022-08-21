import { Component, OnInit } from '@angular/core';
import { AddStaff, RemoveStaff, StoreStaff, UpdateStaff } from '../interface/staff.interface';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService as AuthApiService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: StoreStaff[] = [{name: 'abc', role: 'manager', phoneNumber: '987654425', emailAddress: 'abc@yopmail.com'}]

  addStaffForm: FormGroup
  addStaffSubmitted = false

  updateStaffForm: FormGroup
  updateStaffSubmitted = false

  constructor(private formBuilder: FormBuilder, private api: AuthApiService) { }

  ngOnInit(): void {
    this.addStaffForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })

    this.updateStaffForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }

  get addStaffFunction(): { [key: string]: AbstractControl } {
    return this.addStaffForm.controls;
  }
  get updateStaffFunction(): { [key: string]: AbstractControl } {
    return this.updateStaffForm.controls;
  }

  addStaff(): void {
    this.addStaffSubmitted = true
    if (this.addStaffForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new AddStaff(new UserInfo(phoneNumber),
    new StoreStaff(this.addStaffForm.value.name, this.addStaffForm.value.role,
      this.addStaffForm.value.phoneNumber, this.addStaffForm.value.emailAddress))
    
    this.api.addStaff(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateStaff(): void {
    this.updateStaffSubmitted = true
    if (this.updateStaffForm.invalid) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateStaff(new UserInfo(phoneNumber),
    new StoreStaff(this.updateStaffForm.value.name, this.updateStaffForm.value.role,
      this.updateStaffForm.value.phoneNumber, this.updateStaffForm.value.emailAddress))
    
    this.api.updateStaff(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  removeStaff(index: number): void {
    const staff = this.staff[index]
    const phoneNumber = localStorage.getItem('phone')
    const payload = new RemoveStaff(new UserInfo(phoneNumber), staff)

    this.api.removeStaff(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

}
