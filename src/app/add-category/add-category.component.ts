import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AuthService as ApiAuthService } from '../api/auth.service';
import { UserInfo } from '../interface/auth.interface';
import {
  AddCategory,
  AddCategoryMenuInfo,
  AddSubCategory,
  AddSubCategoryMenuInfo,
} from '../interface/category.interface';
import { StoreIdSchema } from '../interface/interface';
import { ServiceToasterService } from '../service-toaster.service';

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

  categories: any;

  public croppedImage: string;
  public imageChangedEvent: any;
  public showProfilePic: boolean = true;
  public showSubProfilePic: boolean = true;

  public spinner:boolean =  true;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiAuthService,
    public toasterService: ServiceToasterService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      imageURL: ['', Validators.required],
    });

    this.subCategoryForm = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      menuSubCategory: ['', Validators.required],
      // imageURL: ['', Validators.required],
    });

    this.getCategory();
  }

  getCategory() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getMenuCategory(new StoreIdSchema(storeId))
      .then((res) => {
        this.spinner = false;
        this.categories = res['menuCategories'];
        this.toasterService.success('');
      })
      .catch((error) => {
        this.spinner = false;
        this.toasterService.failure(error);
        console.log(error);
      });
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
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new AddCategory(
      new AddCategoryMenuInfo(this.form.value.menuCategory)
    );
    this.api
      .addCategory(payload)
      .then((res: any) => {
        if (res.status == 'success') {
          this.uploadItemPic(this.form.value.menuCategory);
          this.text = 'You have added the category successfully!';
          this.toasterService.success(this.text);
        }

        this.form.reset();
        this.submitted = false;

        this.getCategory();
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }

  onProfilePicUpload(event, isSubcat: boolean) {
    this.imageChangedEvent = event;
    this.showProfilePic = isSubcat;
    this.showSubProfilePic = !isSubcat;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  dataURItoBlob(dataURI: any) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png',
    });
  }

  uploadItemPic(category: string, subCategory: any = undefined) {
    const imageBlob = this.dataURItoBlob(this.croppedImage);
    const file: File = new File([imageBlob], 'uploadImage', {
      type: 'image/png',
    });
    const formData = new FormData();
    formData.append('restaurantImage', file);
    formData.append(
      'phoneNumber',
      localStorage.getItem('phoneWithCountry').replace('+', '')
    );
    formData.append('imageType', 'menu');
    formData.append('imageDetail1', subCategory ? category : '');
    formData.append('imageDetail2', subCategory ? subCategory : category);
    this.showProfilePic = true;
    this.showSubProfilePic = true;
    this.api
      .uploadImage(formData)
      .then((res: any) => {
        this.toasterService.success('');
      })
      .catch((error) => {
        this.toasterService.failure(error);
        console.log(error);
      });
  }

  addSubCategory(): void {
    this.subCategorySubmitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new AddSubCategory(
      new AddSubCategoryMenuInfo(
        this.subCategoryForm.value.menuCategory,
        this.subCategoryForm.value.menuSubCategory
      )
    );

    this.api
      .addSubCategory(payload)
      .then((res: any) => {
        if (res.status == 'success') {
          this.uploadItemPic(
            this.subCategoryForm.value.menuCategory,
            this.subCategoryForm.value.menuSubCategory
          );
          this.text = 'You have added the sub category successfully!';
          this.toasterService.success(this.text);
        }
        this.subCategoryForm.reset();
        this.subCategorySubmitted = false;
      })
      .catch((error) => {
        this.toasterService.failure(error);
      });
  }

  onReset(): void {
    this.submitted = false;
    this.subCategorySubmitted = false;
    this.form.reset();
    this.subCategoryForm.reset();
  }
}
