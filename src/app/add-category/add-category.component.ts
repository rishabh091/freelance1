import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import { AddCategory, AddCategoryMenuInfo, AddSubCategory, AddSubCategoryMenuInfo } from '../interface/category.interface';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  subCategoryForm: FormGroup;
  subCategorySubmitted = false

  constructor(private formBuilder: FormBuilder, private api: ApiAuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        menuCategory: ['', Validators.required]      }
    );

    this.subCategoryForm = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      menuSubCategory: ['', Validators.required],
      imageURL: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get subCategory(): { [key: string]: AbstractControl } {
    return this.subCategoryForm.controls
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const phoneNumber = localStorage.getItem('phone')
    const payload = new AddCategory(new UserInfo(phoneNumber), new AddCategoryMenuInfo(this.form.value.menuCategory))
    this.api.addCategory(payload).then(res => { console.log('done') }).catch(error => { console.log(error) })
  }

  addSubCategory(): void {
    this.subCategorySubmitted = true
    if (this.subCategoryForm.invalid) { return }

    const phoneNumber = localStorage.getItem('phone')
    const payload = new AddSubCategory(new UserInfo(phoneNumber),
    new AddSubCategoryMenuInfo(this.subCategoryForm.value.menuCategory,
      this.subCategoryForm.value.menuSubCategory,
      this.subCategoryForm.value.imageURL))

    this.api.addSubCategory(payload).then(res => {console.log(res)}).catch(error => {console.log(error)})
  }

  onReset(): void {
    this.submitted = false;
    this.subCategorySubmitted = false
    this.form.reset();
    this.subCategoryForm.reset()
  }

}
