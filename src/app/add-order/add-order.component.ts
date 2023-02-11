import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceToasterService } from '../service-toaster.service';
import { AuthService as AuthApiService } from '../api/auth.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  public spinner: boolean = false;
  form: FormGroup;
  submitted = false;

  menuItem=['abc','jd','dsh','djsk'];
  orderArray = [0];

  itemName=[];
  itemCount=[]
  constructor(
    private formBuilder: FormBuilder,
    private api: AuthApiService,
    private toaster: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tableNumber: ['', Validators.required],
      // tableCode: ['', [Validators.required]],
    });
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
      items.push({menuItemName: this.itemName[i], itemCount: this.itemCount[i]})
    }

    const payload = {
      tableNumber: this.form.value.tableNumber,
      menuItems: {
        items: items
      }
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
