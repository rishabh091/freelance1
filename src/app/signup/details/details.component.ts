import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService as ApiAuthService } from 'src/app/api/auth.service';
import { AuthService } from 'src/app/auth/auth.service';
import {
  AboutStore,
  StoreTimings,
  UpdateAboutStore,
  UpdateStoreTimings,
  UserInfo,
} from 'src/app/interface/auth.interface';
import {
  UpdateCategory,
  UpdateCategoryModule,
} from 'src/app/interface/category.interface';
import { ServiceToasterService } from 'src/app/service-toaster.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  private phoneNumber: string;

  public spinner:boolean =  false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private api: ApiAuthService,
    private router: Router,
    private auth: AuthService,
    private toaster: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      opensAt: ['', Validators.required],
      closesAt: ['', Validators.required],
      aboutStore: ['', Validators.required],
      storeCategory: ['', Validators.required],
      isPrePaid: [false, Validators.required],
    });

    this.phoneNumber = this.route.snapshot.paramMap
      .get('phoneNumber')
      .replace('+', '');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  convert24To12(timeString: string) {
    const [hourString, minute] = timeString.split(':');
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ':' + minute + (hour < 12 ? ' AM' : ' PM');
  }

  convert12To24(time12h: string) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      let hours24 = parseInt(hours, 10) + 12;
      if (hours24 < 10) {
        hours = `0${hours24}`;
      } else {
        hours = hours24 + '';
      }
    }

    if (parseInt(hours) < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:${minutes}`;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.submitted = true;
    }

    const updateCategoryPayload = new UpdateCategory(
      new UserInfo(this.phoneNumber),
      new UpdateCategoryModule(
        this.form.controls['storeCategory'].value,
        this.form.controls['isPrePaid'].value,
        !this.form.controls['isPrePaid'].value
      )
    );

    const updateAboutStorePayload = new UpdateAboutStore(
      new UserInfo(this.phoneNumber),
      new AboutStore(this.form.controls['aboutStore'].value)
    );

    const updateStoreTimingsPayload = new UpdateStoreTimings(
      new UserInfo(this.phoneNumber),
      new StoreTimings(
        this.convert24To12(this.form.controls['opensAt'].value),
        this.convert24To12(this.form.controls['closesAt'].value)
      )
    );

    const promises = [
      this.api.updateCategory(updateCategoryPayload),
      this.api.updateStoreTimings(updateStoreTimingsPayload),
      this.api.updateStoreAbout(updateAboutStorePayload),
    ];

    Promise.all(promises)
      .then((result: any[]) => {
        const payload = new UserInfo(this.phoneNumber);
        this.api.isUserRegisterd(payload).then((res) => {
          this.toaster.success('');
          localStorage.setItem('privilege', res['isprivilegedUser']);
          localStorage.setItem('storeId', res['restaurantId']);
          this.router.navigate(['/orders']);
        });

        this.auth.login();
      })
      .catch((error) => {
        console.log(error);
        this.toaster.failure('Some error occur please try again later.');
      });
  }
}
