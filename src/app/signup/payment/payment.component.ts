import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  UpdatePaymentModule,
  UserInfo,
  StorePayment,
} from 'src/app/interface/auth.interface';
import { AuthService as ApiAuthService } from 'src/app/api/auth.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  private phoneNumber: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiAuthService: ApiAuthService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      acceptedCurrency: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifcsCode: ['', Validators.required],
      accountHolderName: ['', Validators.required],
    });

    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const payload = new UpdatePaymentModule(
      new UserInfo(this.phoneNumber),
      new StorePayment(
        this.form.value.acceptedCurrency,
        this.form.value.accountNumber,
        this.form.value.ifcsCode,
        this.form.value.accountHolderName
      )
    );

    this.apiAuthService
      .updatePayment(payload)
      .then((res) => {
        this.auth.login();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}