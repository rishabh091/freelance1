import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserInfo } from '../interface/auth.interface';
import { MenuInfo, RemoveMenuCategory } from '../interface/category.interface';
import { StoreIdSchema } from '../interface/interface';
import { AuthService as Api } from '../api/auth.service';
import { ServiceToasterService } from '../service-toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css'],
})
export class ShowMenuComponent implements OnInit {
  constructor(
    private api: Api,
    public toasterService: ServiceToasterService,
    public router: Router

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


  checkPrivilage() {
    return localStorage.getItem('privilege').toLowerCase() == 'true'
  }

  ngOnInit(): void {
    this.getMenuCategories();
  }

  moveToSubcategory(event, category: string) {
    this.router.navigate([`showMenu/subcat/${category}`])
  }

  getImage(imgUrl: string) {
    return this.api.getImageUrl(imgUrl)
  }

  getMenuCategories() {
    const storeId = localStorage.getItem('storeId');
    const payload = new StoreIdSchema(storeId)
    this.api.getMenuCategory(payload).then((categoryResponse: any) => {
      this.menuGroups = categoryResponse['menuCategories']
    })
    .catch((error) => {
        console.log(error);
    });
  }

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
        this.getMenuCategories()
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setCategory(event, item) {
    this.updateCategoryForm.controls['storeSubCategory'].setValue(item);
    this.setCategoryName = item;
  }
}
