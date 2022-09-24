import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModule, UserInfo } from '../interface/auth.interface';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth/auth.service';
import { Data } from '../countryCodes.data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public otp: any;
  public requestedOTP: boolean = false;
  public otpRequestCountdown = 0;
  public errorMessage: string = '';

  private windowRef: any;
  private otpCheckInterval: any;
  countryData = new Data();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiAuthService: ApiAuthService,
    private auth: AuthService,
    public afAuth: AngularFireAuth
  ) {
    this.windowRef = window;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      storeName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      countryCode: ['', Validators.required],
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

    const phoneNumber = this.form.value.phoneNumber;
    if (phoneNumber.length != 10) {
      this.submitted = true;
      this.form.setErrors({ invalid: true });
    }

    this.windowRef = window;
    const auth = getAuth();
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: (response: any) => {
          if (!this.otpRequestCountdown) {
            this.requestedOTP = true;
            this.requestOTP();
          }
        },
      },
      auth
    );

    this.windowRef.recaptchaVerifier.render();
  }

  requestOTP() {
    if (!this.requestOTP) {
      return;
    }

    this.afAuth
      .signInWithPhoneNumber(
        this.form.value.countryCode + String(this.form.value.phoneNumber),
        this.windowRef.recaptchaVerifier
      )
      .then((confirmationResult) => {
        this.errorMessage = '';
        this.otpRequestCountdown = 60;
        this.form.disable();
        this.errorMessage = 'OTP sent !!';
        this.windowRef.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        this.form.enable();
        this.otpRequestCountdown = 0;
        this.requestedOTP = false;

        this.errorMessage = 'Failed to get OTP, too many attempts';
      });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  verifyOtp() {
    // if (this.requestOTP || this.otpRequestCountdown) { return }

    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((result) => {
        this.form.disable();
        clearInterval(this.otpCheckInterval);

        const payload = new RegisterModule(
          this.form.value.userName,
          this.form.value.storeName,
          this.form.value.emailAddress,
          new UserInfo(
            this.form.value.countryCode + this.form.value.phoneNumber + ''
          )
        );

        this.apiAuthService
          .register(payload)
          .then((res) => {
            this.router.navigate([
              '/signup/address/' +
                this.form.value.countryCode +
                this.form.value.phoneNumber,
            ]);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        this.form.enable();
        this.requestedOTP = false;
        this.otpRequestCountdown = 0;

        this.errorMessage = 'Invalid OTP';
      });
  }
}
