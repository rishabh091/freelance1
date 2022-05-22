import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLoggedIn()
    this.form = this.formBuilder.group({
      phone: ['', Validators.required],
      resturantName: ['', Validators.required],
      about: ['', Validators.required],
      email: ['', Validators.required],

      buildingNumber: ['', Validators.required],
      streetNumber: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      resturantCatogory: ['', Validators.required],
      ifscCode: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/orders']);
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
