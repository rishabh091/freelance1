import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/api/auth.service';
import { SubMenuCategories } from 'src/app/interface/category.interface';

@Component({
  selector: 'app-show-subcategory',
  templateUrl: './show-subcategory.component.html',
  styleUrls: ['./show-subcategory.component.css']
})
export class ShowSubcategoryComponent implements OnInit {

  public selectedCategory: string
  public subCategories: any[]

  constructor(private router: Router, private route: ActivatedRoute, private api: AuthService) { }

  ngOnInit(): void {
    this.selectedCategory = this.route.snapshot.paramMap.get('category')
    this.getSubCategories(this.selectedCategory)
  }

  getSubCategories(category: string) {
    const storeId = localStorage.getItem('storeId');
    this.api
      .getSubCategory(new SubMenuCategories(storeId, category))
      .then((res) => {
        console.log(res)
        this.subCategories = res['menuSubCategories'];
      })
      .catch((error) => {
        console.log(error);
      });
  }

  moveToProduct(subcategory: string) {
    this.router.navigate([`showMenu/prod/${subcategory}/${this.selectedCategory}`])
  }

  getImage(imgUrl: string) {
    return this.api.getImageUrl(imgUrl)
  }

}
