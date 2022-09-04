import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { GetTableInfo, GetTableState, UpdateTableInfo, UpdateTableState } from '../interface/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public table = [1,2,3,4,5,6,7,8,9,10]

  public updateTableStateForm: FormGroup
  public updateTableStateFormSubmitted = false
  public selectedZone: string

  constructor(private formBuilder: FormBuilder, private api: ApiAuthService,
    private route: ActivatedRoute) {
    this.updateTableStateForm = this.formBuilder.group({
      zone: ['', Validators.required],
      tableNumber: [-1, Validators.required],
      openTable: [false, Validators.required],
      forceClose: [false, Validators.required]
    })
  }

  get updateTableStateFormControls(): { [key: string]: AbstractControl } {
    return this.updateTableStateForm.controls;
  }

  ngOnInit(): void {
    this.selectedZone = this.route.snapshot.paramMap.get('zone')
  }

  getTableState(tableNumber: number) {
    const phoneNumber = localStorage.getItem('phone')
    const payload = new GetTableState(new UserInfo(phoneNumber), new GetTableInfo(this.selectedZone, tableNumber))

    this.api.getTableState(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

  updateTableState() {
    this.updateTableStateFormSubmitted = true;
    if (this.updateTableStateForm.invalid) {
      return;
    }

    if (this.updateTableStateForm.value.tableNumber <= 0) return

    const phoneNumber = localStorage.getItem('phone')
    const payload = new UpdateTableState(new UserInfo(phoneNumber), new UpdateTableInfo(
      this.updateTableStateForm.value.zone,
      this.updateTableStateForm.value.tableNumber,
      this.updateTableStateForm.value.openTable,
      this.updateTableStateForm.value.forceClose
    ))

    this.api.updateTableState(payload).then(res => { console.log(res) }).catch(error => { console.log(error) })
  }

}
