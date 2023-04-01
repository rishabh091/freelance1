import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UpdatePaymentModule,
  UserInfo,
  StorePayment,
} from 'src/app/interface/auth.interface';
import { ApiService as ApiAuthService } from 'src/app/api/auth.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ServiceToasterService } from '../../service-toaster.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
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
      acceptedCurrency: ['', Validators.required],
      paymentGatewayID: ['', Validators.required],
    });

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

    const payload = new UpdatePaymentModule(
      new UserInfo(this.phoneNumber),
      new StorePayment(
        this.form.value.acceptedCurrency,
        this.form.value.paymentGatewayID
      )
    );

    this.apiAuthService
      .updatePayment(payload)
      .then((res) => {
        this.toasterService.success('');
        this.router.navigate(['/signup/details/' + this.phoneNumber]);
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }
}
