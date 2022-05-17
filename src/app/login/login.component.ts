import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private router: Router) {}
 
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        phone: ['', Validators.required],
      
      }
     
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.requestedOTP = true
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  verifyOtp() {
    this.router.navigate(['/orders'])
  }

}
