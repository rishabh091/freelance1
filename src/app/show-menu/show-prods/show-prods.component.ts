import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ApiService } from 'src/app/api/auth.service';
import { UserInfo } from 'src/app/interface/auth.interface';
import { MenuItemPrice, UpdateMenuItemPrice } from 'src/app/interface/category.interface';
import { StoreIdSchema } from 'src/app/interface/interface';
import { RemoveMenuItem, RemoveMenuItemModule } from 'src/app/interface/item.interface';

@Component({
  selector: 'app-show-prods',
  templateUrl: './show-prods.component.html',
  styleUrls: ['./show-prods.component.css']
})
export class ShowProdsComponent implements OnInit {

  public selectedSubCategory: string
  public selectedCategory: string
  public products: any[]


  public setCategoryName: string = ''
  public setSubCategoryName: string = ''
  public setItemName: string = ''

  public menuItemForm: FormGroup
  public submitted: boolean = false

  public croppedImage: string
  public imageChangedEvent: any
  public showProfilePic: boolean = true

  constructor(private api: ApiService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      ItemName: ['', Validators.required],
      ItemType: ['', Validators.required],
      Price: [0, Validators.required],
      AvailableNow: [false, Validators.required],
      NextAvailableTime: [new Date(), Validators.required],
      DisplayImagePath: ['', Validators.required],
    });

    this.selectedSubCategory = this.route.snapshot.paramMap.get('subcategory')
    this.selectedCategory = this.route.snapshot.paramMap.get('category')
    this.getMenuItems()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.menuItemForm.controls;
  }

  getMenuItems() {
    const storeId = localStorage.getItem('storeId');
    const payload = new StoreIdSchema(storeId)

    this.api.getMenuItems(payload).then((res: any) => {
      this.products = res['menuItems'].filter(item => { return item.subMenu.toLowerCase() == this.selectedSubCategory.toLowerCase() && item.menu.toLowerCase() == this.selectedCategory.toLowerCase() })
    }).catch(error => { console.log(error) })
  }

  getImage(imgUrl: string) {
    return this.api.getImageUrl(imgUrl)
  }

  checkPrivilage() {
    return localStorage.getItem('privilege').toLowerCase() == 'true'
  }

  setMenuItems(items) {
    this.setCategoryName = items.menu;
    this.setSubCategoryName = items.subMenu;
    this.setItemName = items.menuItem;
    this.menuItemForm.controls['ItemName'].setValue(items.menuItem);
    this.menuItemForm.controls['ItemType'].setValue(items.itemType);
    this.menuItemForm.controls['Price'].setValue(items.price);
    this.menuItemForm.controls['DisplayImagePath'].setValue(items.imgURL);
  }

  editProduct(): void {
    this.submitted = true;
    if (this.menuItemForm.invalid) {
      return;
    }

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const pricePayload = new UpdateMenuItemPrice(
      new MenuItemPrice(
        this.menuItemForm.value.ItemName,
        this.menuItemForm.value.Price
      )
    );

    this.api
      .updateMenuItemPrice(pricePayload)
      .then((res) => {
        this.uploadItemPic()
        this.getMenuItems();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dataURItoBlob(dataURI : any) {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: 'image/png'
    });
  }

  onProfilePicUpload(event) {
    this.imageChangedEvent = event
    this.showProfilePic = false
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  uploadItemPic() {
    const imageBlob = this.dataURItoBlob(this.croppedImage );
    const file:File = new File([imageBlob], "uploadImage", { type: 'image/png' });
    const formData = new FormData();  
    formData.append('restaurantImage', file);
    formData.append('phoneNumber', localStorage.getItem('phoneWithCountry').replace('+', ''));
    formData.append('imageType', "menuItem");
    formData.append('imageDetail1', this.menuItemForm.value.ItemName);
    this.api.uploadImage(formData).then((res: any) => {
      this.showProfilePic = true
    }).catch(error => { console.log(error) })
  }

  removeMenuItem() {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    this.api
      .removeMenuItem(
        new RemoveMenuItemModule(
          new UserInfo(phoneNumber),
          new RemoveMenuItem(
            this.setCategoryName,
            this.setSubCategoryName,
            this.setItemName
          )
        )
      )
      .then((res) => {
        this.getMenuItems()
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
