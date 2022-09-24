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

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css'],
})
export class ZonesComponent implements OnInit {
  public zone: CreateTableInfo[];

  public addZoneForm: FormGroup;
  public addZoneSubmitted = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private api: ApiAuthService
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
    const phoneNumber = localStorage.getItem('phone');
    const payload = new ZoneSchema(new UserInfo(phoneNumber));
    this.api
      .getZone(payload)
      .then((res: CreateTableInfo[]) => {
        this.zone = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addZone() {
    this.addZoneSubmitted = true;
    if (this.addZoneForm.invalid) {
      return;
    }

    const phoneNumber = localStorage.getItem('phone');
    const payload = new CreateZone(
      new UserInfo(phoneNumber),
      new CreateTableInfo(
        this.addZoneForm.value.zone,
        this.addZoneForm.value.startTableNumber,
        this.addZoneForm.value.endTableNumber
      )
    );

    this.api
      .addZone(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeZone(index: number) {
    const zone = this.zone[index];
    const phoneNumber = localStorage.getItem('phone');

    const payload = new RemoveZone(
      new UserInfo(phoneNumber),
      new RemoveTableInfo(zone.zone)
    );
    this.api
      .removeZone(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
