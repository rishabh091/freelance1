import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {MatListModule} from '@angular/material/list';
import { getAuth, RecaptchaVerifier, GoogleAuthProvider, FacebookAuthProvider, Auth } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;
  public otp: any
  public requestedOTP: boolean = false
  public otpRequestCountdown = 0
  public errorMessage: string = ''

  windowRef: any
  otpCheckInterval: any

  constructor(private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, private auth: AuthService) {
      this.windowRef = window    }
 
  ngOnInit(): void {
    // check if user is logged in or not
    this.auth.isLoggedIn()
    this.form = this.formBuilder.group({
        phone: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999)]]
      }
    );

    this.otpCheckInterval = setInterval(() => {
      if (this.otpRequestCountdown > 0) {
        this.otpRequestCountdown--
      }
    }, 1000)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    }

    const phoneNumber = this.form.value.phone + ''
    if (phoneNumber.length != 10) {
      this.submitted = true;
      this.form.setErrors({ 'invalid': true })
      return
    }
    
    this.windowRef = window
    const auth = getAuth()
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback : (response: any) => {
        if (!this.otpRequestCountdown) {
          this.requestedOTP = true
          this.requestOTP()
        }
      },
    }, auth)

    this.windowRef.recaptchaVerifier.render()
    
    console.log(phoneNumber)
  }

  requestOTP() {
    if (!this.requestOTP) { return }

    this.afAuth.signInWithPhoneNumber('+91' + String(this.form.value.phone), this.windowRef.recaptchaVerifier)
    .then(confirmationResult => {
      this.errorMessage = ''
      this.otpRequestCountdown = 60
      this.form.disable()
      this.errorMessage = 'OTP sent !!'
      this.windowRef.confirmationResult = confirmationResult
    }).catch(error => {
      this.form.enable()
      this.otpRequestCountdown = 0
      this.requestedOTP = false

      this.errorMessage = 'Failed to get OTP, too many attempts'
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  verifyOtp() {
    // if (this.requestOTP || this.otpRequestCountdown) { return }

    this.windowRef.confirmationResult.confirm(this.otp)
    .then(result => {
      this.form.disable()
      clearInterval(this.otpCheckInterval)
      
      this.auth.login()
    }).catch(error => {
      this.form.enable()
      this.requestedOTP = false
      this.otpRequestCountdown = 0
      
      this.errorMessage = 'Invalid OTP'
    })
  }

}
