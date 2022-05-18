import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        ItemName: ['', Validators.required],
        ItemType : ['', Validators.required],
        Price:['', Validators.required],
        Discount : ['', Validators.required],
        AvailableNow :['', Validators.required],
        NextAvailableTime :['', Validators.required],
        DisplayImagePath : ['', Validators.required]
        // itemCategory: ['', Validators.required],
        // itemName: ['', Validators.required],
        // itemDesc: ['', Validators.required],
        // itemAmount: ['', Validators.required], 
        // itemisVeg: ['', Validators.required],
      }
     
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
