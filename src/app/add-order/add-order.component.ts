import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceToasterService } from '../service-toaster.service';
import { ApiService as AuthApiService } from '../api/auth.service';
import { StoreIdSchema } from '../interface/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  public spinner: boolean = true;
  form: FormGroup;
  submitted = false;

  menuItem;
  orderArray = [0];

  itemName=[];
  itemCount=[];

  tableNumber
  userId

  constructor(
    private formBuilder: FormBuilder,
    private api: AuthApiService,
    private toaster: ServiceToasterService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // tableNumber: ['', Validators.required],
      // tableCode: ['', [Validators.required]],
    });
    this.getItems();

    this.tableNumber = this.route.snapshot.paramMap
    .get('tableNumber');
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  getItems() {
    this.api.getMenuItems(new StoreIdSchema(localStorage.getItem('storeId'))).then(res => {
      this.menuItem = res['menuItems'];
      this.spinner = false;
    }).catch(error => {
      console.log(error)
      this.spinner = false;
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  addItem(index: number) {
    this.orderArray.push(++index);
  }
  
  removeItem(index: number) {
    if (index) {
      this.orderArray.pop();
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    const items = []
    for (let i in this.itemName) {
      if (this.itemName[i] && this.itemCount[i] && this.itemCount[i] > 0) {
        items.push({menuItemName: this.itemName[i], itemCount: parseInt(this.itemCount[i])})
      }
    }

    if (!items.length) {
      this.toaster.failure('Enter valid item name and count');
      return;
    }

    const payload = {
      tableNumber: parseInt(this.tableNumber),
      menuItems: {
        items: items
      }
    }

    if (this.userId) {
      payload['userID'] = this.userId;
    }

    this.api.createOrder(payload).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
