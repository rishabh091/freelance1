import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterModule, UserInfo } from '../modules/auth-module.service';
import { AuthService as ApiAuthService} from '../api/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private apiAuthService: ApiAuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      storeName: ['', Validators.required],
      emailAddress: ['', Validators.required]
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

    const payload = new RegisterModule(this.form.value.userName, this.form.value.storeName,
      this.form.value.emailAddress, new UserInfo(this.form.value.phoneNumber + ''))

    this.apiAuthService.register(payload).then(res => {
      this.router.navigate([''])
    }).catch(error => { console.log(error) })

  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
