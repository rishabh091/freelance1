import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import {
  GetTableInfo,
  GetTableState,
  TableOrderMove,
  TableTransactions,
  UpdateTableInfo,
  UpdateTableState,
} from '../interface/table.interface';
import { CreateTableInfo, ZoneSchema } from '../interface/zone.interface';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public table = [];

  public updateTableStateForm: FormGroup;
  public updateTableStateFormSubmitted = false;
  public selectedZone: string;
  public allZones: [];
  public selectedZoneObject: CreateTableInfo[];
  public tableTransactions: [];
  public tableState = {
    tableCode: '',
    tableOpen: false,
  };
  public tableNumber: number;
  public moveToTableNumber: number

  public qrCode: string = `https://hiveezy.com/store?storeid=${localStorage.getItem('storeId')}&table={tableNumber}`

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiAuthService,
    private route: ActivatedRoute,
    public toasterService: ServiceToasterService

  ) {
    this.updateTableStateForm = this.formBuilder.group({
      zone: ['', Validators.required],
      tableNumber: [-1, Validators.required],
      openTable: [false, Validators.required],
      forceClose: [false, Validators.required],
    });
  }

  getZone() {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new ZoneSchema(new UserInfo(phoneNumber));
    this.api
      .getZone(payload)
      .then((res: any) => {
        this.allZones = res.zoneInfo;
        this.selectedZoneObject = this.allZones.filter((zone: any) => {
          return zone.zone == this.selectedZone;
        });

        for (
          let i = this.selectedZoneObject[0].startTableNumber;
          i <= this.selectedZoneObject[0].endTableNumber;
          i++
        ) {
          this.table.push(i);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get updateTableStateFormControls(): { [key: string]: AbstractControl } {
    return this.updateTableStateForm.controls;
  }

  ngOnInit(): void {
    this.selectedZone = this.route.snapshot.paramMap.get('zone');
    this.getZone();
  }

  getTableData(tableNumber: number) {
    this.tableNumber = tableNumber;
    this.getTableTransaction(tableNumber);
    this.getTableState(tableNumber);

    this.qrCode = this.qrCode.replace('{tableNumber}', tableNumber + '')
    console.log(this.qrCode)
  }

  getTableTransaction(tableNumber: number) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new TableTransactions(
      new UserInfo(phoneNumber),
      tableNumber
    );
    this.api
      .getTableTransaction(payload)
      .then((res: any) => {
        this.tableTransactions = res.tableTransaction;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTableState(tableNumber: number) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new GetTableState(
      new UserInfo(phoneNumber),
      new GetTableInfo(this.selectedZone, tableNumber)
    );

    this.api
      .getTableState(payload)
      .then((res: any) => {
        this.tableState = res.status;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateTableState(tableNumber: number, tableOpen: boolean) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new UpdateTableState(
      new UserInfo(phoneNumber),
      new UpdateTableInfo(this.selectedZone, tableNumber, !tableOpen, tableOpen)
    );

    this.api
      .updateTableState(payload)
      .then((res) => {
        this.getTableTransaction(tableNumber);
        this.getTableState(tableNumber);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  moveTableTransaction() {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new TableOrderMove(
      new UserInfo(phoneNumber),
      this.tableNumber,
      this.moveToTableNumber
    );

    this.api
      .moveTableTransactions(payload)
      .then((res) => {
        this.moveToTableNumber = 0
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
