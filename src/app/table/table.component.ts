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
import { StoreIdSchema } from '../interface/interface';
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
  public moveToTableNumber: number;

  public isPrePaid: boolean = false;

  public qrCode: string = `https://hiveezy.com/store?storeid=${localStorage.getItem(
    'storeId'
  )}`;
  public spinner:boolean =  true;


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
        this.spinner = false;
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
        this.spinner = false;
        this.toasterService.failure(error);
      });
  }

  get updateTableStateFormControls(): { [key: string]: AbstractControl } {
    return this.updateTableStateForm.controls;
  }

  ngOnInit(): void {
    this.selectedZone = this.route.snapshot.paramMap.get('zone');
    this.getZone();
    this.getPaymentInfo();
  }

  getPaymentInfo(): void {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getPaymentInfo(new StoreIdSchema(storeId))
      .then((res: any) => {
        this.isPrePaid = res.isPrePaid;
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }

  getTableData(tableNumber: number) {
    if (!this.isPrePaid) {
      this.tableNumber = tableNumber;
      this.getTableTransaction(tableNumber);
      this.getTableState(tableNumber);
      this.qrCode = this.qrCode + `&table=${tableNumber}`;
    }
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
        this.toasterService.failure(error);
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
        this.toasterService.failure(error);
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
        this.toasterService.success('Updated table state');
      })
      .catch((error) => {
        this.toasterService.failure(error);
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
        this.moveToTableNumber = 0;
        this.toasterService.success('Table moved!');
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }
}
