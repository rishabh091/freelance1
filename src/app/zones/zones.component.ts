import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CreateZone,
  CreateTableInfo,
  RemoveZone,
  RemoveTableInfo,
  ZoneSchema,
} from '../interface/zone.interface';
import { UserInfo } from '../interface/auth.interface';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css'],
})
export class ZonesComponent implements OnInit {
  public zone: CreateTableInfo[];

  public addZoneForm: FormGroup;
  public addZoneSubmitted = false;

  public spinner:boolean =  true;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private api: ApiAuthService,
    private toaster: ServiceToasterService
  ) {
    this.addZoneForm = this.formBuilder.group({
      zone: ['', Validators.required],
      startTableNumber: [0, Validators.required],
      endTableNumber: [0, Validators.required],
    });
  }

  get addZoneControls(): { [key: string]: AbstractControl } {
    return this.addZoneForm.controls;
  }

  ngOnInit(): void {
    this.getZone();
  }

  getZone() {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new ZoneSchema();
    this.api
      .getZone(payload)
      .then((res: any) => {
        this.spinner = false;
        this.zone = res.zoneInfo;
      })
      .catch((error) => {
        this.spinner = false;
        this.toaster.failure(error)
      });
  }

  addZone() {
    this.addZoneSubmitted = true;
    if (this.addZoneForm.invalid) {
      return;
    }

    if (
      this.addZoneForm.value.startTableNumber >
      this.addZoneForm.value.endTableNumber
    ) {
      return;
    }

    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
    const payload = new CreateZone(
      new CreateTableInfo(
        this.addZoneForm.value.zone,
        this.addZoneForm.value.startTableNumber,
        this.addZoneForm.value.endTableNumber
      )
    );

    this.api
      .addZone(payload)
      .then((res) => {
        this.addZoneForm.reset()
        this.addZoneSubmitted = false
        this.toaster.success('Zone Added');
        this.getZone();
      })
      .catch((error) => {
        this.toaster.failure('Please try again later')
      });
  }

  goToTables(zone: CreateTableInfo) {
    this.router.navigate(['/table/' + zone.zone])
  }

  removeZone(event, index: number) {
    event.stopPropagation()
    const zone = this.zone[index];
    const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');

    const payload = new RemoveZone(
      new RemoveTableInfo(zone.zone)
    );
    this.api
      .removeZone(payload)
      .then((res) => {
        this.getZone()
        this.toaster.success('')
      })
      .catch((error) => {
        this.toaster.failure(error);
      });
  }
}
