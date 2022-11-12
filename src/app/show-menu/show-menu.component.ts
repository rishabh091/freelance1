import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserInfo } from '../interface/auth.interface';
import {
  AddSubCategory,
  AddSubCategoryMenuInfo,
  CategoryImageInfo,
  ItemDailyAvailability,
  MenuCategoryImage,
  MenuInfo,
  MenuItemCurrentAvailability,
  MenuItemPrice,
  RemoveMenuCategory,
  SubMenuCategories,
  UpdateCategory,
  UpdateCategoryModule,
  UpdateItemCurrentAvailability,
  UpdateMenuItemDailyAvailability,
  UpdateMenuItemPrice,
} from '../interface/category.interface';
import { MenuImageInfo, MenuItem, MenuItemImage, StoreIdSchema } from '../interface/interface';
import { MockResturantMenus, MockMenuGroups } from '../mock.menu'; // dummy data
import { AuthService as Api } from '../api/auth.service';
import {
  RemoveMenuItem,
  RemoveMenuItemModule,
} from '../interface/item.interface';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ServiceToasterService } from '../service-toaster.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private api: Api,
    public toasterService: ServiceToasterService

  ) {}

  public menuItemForm: FormGroup;
  public submitted: boolean = false;

  public menuGroups = [];
  public subMenuGroups = {};
  public menuItems = {};

  public updateCategoryForm: FormGroup;
  public updateCategorySubmitted = false;

  public subMenuCategoryForm: FormGroup;
  public subMenuSubmitted = false;

  public category: string = '';
  public subCategory: string = '';

  weekDayAvailability: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  weekDayAvailabilityError = true;

  public setCategoryName: string = '';
  public setSubCategoryName: string = '';
  public setItemName: string = '';

  public croppedImage: string
  public imageChangedEvent: any
  public showProfilePic: boolean = true

  public subCategoryImage = {}

  setMenuItems(items) {
    this.setCategoryName = items.menu;
    this.setSubCategoryName = items.subMenu;
    this.setItemName = items.menuItemName;
    this.menuItemForm.controls['ItemName'].setValue(items.menuItemName);
    this.menuItemForm.controls['ItemType'].setValue(items.itemType[0]);
    this.menuItemForm.controls['Price'].setValue(items.basePrice);
    this.menuItemForm.controls['DisplayImagePath'].setValue(items.imgURL);
  }
  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      ItemName: ['', Validators.required],
      ItemType: ['', Validators.required],
      Price: [0, Validators.required],
      AvailableNow: [false, Validators.required],
      NextAvailableTime: [new Date(), Validators.required],
      DisplayImagePath: ['', Validators.required],
    });

    this.updateCategoryForm = this.formBuilder.group({
      storeSubCategory: ['', Validators.required],
      isPrePaid: [false, Validators.required],
      isFoodServedToTable: [false, Validators.required],
    });

    this.subMenuCategoryForm = this.formBuilder.group({
      menuCategory: ['', Validators.required],
      menuSubCategory: ['', Validators.required],
      imageURL: ['', Validators.required],
    });

    this.getMenuItem();
  }

  getImage(imgUrl: string) {
    return this.api.getImageUrl(imgUrl)
  }

  onProfilePicUpload(event) {
    this.imageChangedEvent = event
    this.showProfilePic = false
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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

  getCategories() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getMenuCategory(new StoreIdSchema(storeId))
      .then((res: any) => {
        for (let obj of res['menuCategories']) {
          let element = document.getElementById(obj.menu)
          if (element) {
            element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${this.getImage(obj['imgURL'])})`
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSubCategories(category: string) {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getSubCategory(new SubMenuCategories(storeId, category))
      .then((res) => {
        this.subMenuGroups[category] = res['menuSubCategories'];
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMenuItem() {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getMenuItems(new StoreIdSchema(storeId))
      .then((res) => {
        this.menuGroups = res['menuItems'].map((obj) => {
          return obj.menu;
        });
        this.menuGroups = [...new Set(this.menuGroups)];

        for (let menu of this.menuGroups) {
          this.subMenuGroups[menu] = [];
          this.menuItems[menu] = {};
        }

        for (let item of res['menuItems']) {
          this.subMenuGroups[item.menu] = [];
          this.getSubCategories(item.menu);
          this.menuItems[item.menu][item.subMenu] = [];
        }
        for (let item of res['menuItems']) {
          this.menuItems[item.menu][item.subMenu].push(item);
        }

        this.getCategories()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.menuItemForm.controls;
  }

  get subCategoryControls(): { [key: string]: AbstractControl } {
    return this.subMenuCategoryForm.controls;
  }

  get updateCategoryFormControls(): { [key: string]: AbstractControl } {
    return this.updateCategoryForm.controls;
  }

  editProduct(): void {
    this.submitted = true;
    console.log(this.menuItemForm)
    if (this.menuItemForm.invalid) {
      return;
    }
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const pricePayload = new UpdateMenuItemPrice(
      new UserInfo(phoneNumber),
      new MenuItemPrice(
        this.setCategoryName,
        this.setSubCategoryName,
        this.menuItemForm.value.ItemName,
        this.menuItemForm.value.Price
      )
    );

    this.api
      .updateMenuItemPrice(pricePayload)
      .then((res) => {
        console.log(res);
        this.uploadItemPic()
        this.getMenuItem();
      })
      .catch((error) => {
        console.log(error);
      });
    // this.api
    //   .updateMenuItemCurrentAvailability(currentAvailabilityPayload)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // this.api
    //   .updateMenuItemDailyAvailability(dailyAvailabilityPayload)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  convertToSeconds(time: string): number {
    const hoursAndMin = time.split(':');
    if (hoursAndMin.length < 2) return parseInt(time);

    const hoursInSec = parseInt(hoursAndMin[0]) * 60 * 60;
    const minutesInSec = parseInt(hoursAndMin[1]) * 60;
    return hoursInSec + minutesInSec;
  }

  openEditModal(editObject: MenuItem) {
    this.menuItemForm.controls['ItemName'].setValue(editObject.ItemName);
    this.menuItemForm.controls['ItemType'].setValue(editObject.ItemType);
    this.menuItemForm.controls['Price'].setValue(editObject.Price);
    this.menuItemForm.controls['Discount'].setValue(editObject.Discount);
    this.menuItemForm.controls['AvailableNow'].setValue(
      editObject.AvailableNow
    );
    this.menuItemForm.controls['NextAvailableTime'].setValue(
      new Date(editObject.NextAvailableTime).toISOString().substring(0, 16)
    );
    this.menuItemForm.controls['DisplayImagePath'].setValue(
      editObject.DisplayImagePath
    );
  }

  expand(event, index: number, category: string) {
    const element = document.getElementById('menuDropdown' + index)
    if (element.clientHeight) element.style.height = '0px'
    else element.style.height = '100%'

    if (element.clientHeight) {
      const phoneNumber = localStorage.getItem('phoneWithCountry').replace('+', '');
      this.subMenuGroups[category].map((subcat: string) => {
        const payload = new CategoryImageInfo(new UserInfo(phoneNumber), new MenuCategoryImage(category, subcat['subMenu']))
        this.api.getCategoryImage(payload).then((res: any) => {
          this.subCategoryImage[category + '-' + subcat['subMenu']] = res
          console.log(this.menuItems[category][subcat['subMenu']])
          let element = document.getElementById(category + '-' + subcat['subMenu'])
          if (element) {
            element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${this.getImage(res['imgURL'])})`
          }
        })
      })
    }
  }

  // updateCategory(): void {
  //   this.updateCategorySubmitted = true;
  //   if (this.updateCategoryForm.invalid) {
  //     return;
  //   }

  //   const phoneNumber = localStorage
  //     .getItem('phoneWithCountry')
  //     .replace('+', '');
  //   const payload = new UpdateCategory(
  //     new UserInfo(phoneNumber),
  //     new UpdateCategoryModule(
  //       this.setSubCategoryName,
  //       this.updateCategoryForm.value.isPrePaid,
  //       this.updateCategoryForm.value.isFoodServedToTable
  //     )
  //   );

  //   this.api
  //     .updateCategory(payload)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  removeCategory(category: string) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    this.api
      .removeMenuCategory(
        new RemoveMenuCategory(
          new UserInfo(phoneNumber),
          new MenuInfo(category)
        )
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
        this.getMenuItem()
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeSubCategory(
    category: string,
    subCategory: string,
    imageUrl: string = ''
  ) {
    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    this.api
      .removeMenuSubCategory(
        new AddSubCategory(
          new UserInfo(phoneNumber),
          new AddSubCategoryMenuInfo(category, subCategory, imageUrl)
        )
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateSubCategory() {
    this.subMenuSubmitted = true;
    if (this.subMenuCategoryForm.invalid) return;

    const phoneNumber = localStorage
      .getItem('phoneWithCountry')
      .replace('+', '');
    const payload = new AddSubCategory(
      new UserInfo(phoneNumber),
      new AddSubCategoryMenuInfo(
        this.subMenuCategoryForm.value.menuCategory,
        this.subMenuCategoryForm.value.menuSubCategory,
        this.subMenuCategoryForm.value.imageURL
      )
    );

    this.api
      .updateMenuSubCategory(payload)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setCategory(item) {
    this.updateCategoryForm.controls['storeSubCategory'].setValue(item);
    this.setCategoryName = item;
  }

  setSubCategory(item) {
    this.updateCategoryForm.controls['storeSubCategory'].setValue(item);
    this.setSubCategoryName = item;
  }
}
