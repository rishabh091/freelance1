import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import {
  AddCategory,
  AddCategoryMenuInfo,
  AddSubCategory,
  AddSubCategoryMenuInfo,
} from '../interface/category.interface';
import { StoreIdSchema } from '../interface/interface';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  subCategoryForm: FormGroup;
  subCategorySubmitted = false;

  text: string;
  successNote: boolean = false;
  errorNote: boolean = false;

  categories: string[]

  constructor(private formBuilder: FormBuilder, private api: ApiAuthService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      menuCategory: ['', Validators.required],
    });

    this.subCategoryForm = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      menuSubCategory: ['', Validators.required],
      imageURL: ['', Validators.required],
    });

    this.getCategory()
  }

  getCategory() {
    const storeId = localStorage.getItem('storeId')
    this.api.getCategory(new StoreIdSchema(storeId)).then(res => {
      this.categories = res['menuCategories']
    }).catch(error => { console.log(error) })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get subCategory(): { [key: string]: AbstractControl } {
    return this.subCategoryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const phoneNumber = localStorage.getItem('phone');
    const payload = new AddCategory(
      new UserInfo(phoneNumber),
      new AddCategoryMenuInfo(this.form.value.menuCategory)
    );
    this.api
      .addCategory(payload)
      .then((res: any) => {
        if (res.status == 'success') {
          this.text = 'You have added the category successfully!';
          this.success(this.text);
        } else {
          this.text = res.status;
          this.failure(this.text);
        }
      })
      .catch((error) => {
        this.text = 'Error in adding the category!';
        this.failure(this.text);
      });
  }

  addSubCategory(): void {
    console.log('diuu');

    this.subCategorySubmitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }

    const phoneNumber = localStorage.getItem('phone');
    const payload = new AddSubCategory(
      new UserInfo(phoneNumber),
      new AddSubCategoryMenuInfo(
        this.subCategoryForm.value.menuCategory,
        this.subCategoryForm.value.menuSubCategory,
        this.subCategoryForm.value.imageURL
      )
    );

    this.api
      .addSubCategory(payload)
      .then((res: any) => {
        if (res.status == 'success') {
          this.text = 'You have added the sub category successfully!';
          this.success(this.text);
        } else {
          this.failure(res.status);
        }
      })
      .catch((error) => {
        this.text = 'Error in adding the sub-category!';
        this.failure(this.text);
      });
  }

  onReset(): void {
    this.submitted = false;
    this.subCategorySubmitted = false;
    this.form.reset();
    this.subCategoryForm.reset();
  }

  success(text: string) {
    this.successNote = true;
    this.text = text;

    setTimeout(() => {
      this.successNote = false;
      this.text = '';
    }, 5000);
  }

  failure(text: string) {
    this.errorNote = true;
    this.text = text;

    setTimeout(() => {
      this.errorNote = false;
      this.text = '';
    }, 5000);
  }
}
