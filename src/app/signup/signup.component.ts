import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModule, UserInfo } from '../interface/auth.interface';
import { ApiService as ApiAuthService } from '../api/auth.service';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth/auth.service';
import { Data } from '../countryCodes.data';
import { ServiceToasterService } from '../service-toaster.service';

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

  public spinner:boolean =  true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiAuthService: ApiAuthService,
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    public toasterService: ServiceToasterService
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
      storeCategory: ['', Validators.required]
    });

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
        this.toasterService.info(this.errorMessage);
        this.windowRef.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        this.form.enable();
        this.otpRequestCountdown = 0;
        this.requestedOTP = false;
        this.toasterService.failure(error);
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
        this.auth.login();
        this.form.disable();
        clearInterval(this.otpCheckInterval);

        this.auth.login().then((value) => {
          const payload = new RegisterModule(
            this.form.value.userName,
            this.form.value.storeName,
            this.form.value.emailAddress,
            this.form.value.storeCategory,
            new UserInfo(
              (
                this.form.value.countryCode +
                this.form.value.phoneNumber +
                ''
              ).replace('+', '')
            )
          );
  
          this.apiAuthService
            .register(payload)
            .then((res) => {
              const payload2 = new UserInfo(
                (
                  this.form.value.countryCode +
                  this.form.value.phoneNumber +
                  ''
                ).replace('+', '')
              );
              this.apiAuthService.isUserRegisterd(payload2).then((res) => {
                localStorage.setItem('privilege', res['isprivilegedUser']);
                localStorage.setItem('storeId', res['storeID']);
                // this.router.navigate(['/orders']);
              });
              this.toasterService.success('');
              this.router.navigate([
                '/signup/address/' +
                  this.form.value.countryCode +
                  this.form.value.phoneNumber,
              ]);
            })
            .catch((error) => {
              this.toasterService.failure(error);
              console.log(error);
            });
        })
      })
      .catch((error) => {
        this.form.enable();
        this.requestedOTP = false;
        this.otpRequestCountdown = 0;

        this.toasterService.failure(error);
      });
  }
}
