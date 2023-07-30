import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../Services/superadmin-category-service.service';
import { CategoryInterface } from 'src/app/interfaces/category-interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: SuperadminCategoryServiceService, private toaster: ToastrService) { }
  catagoryData: any
  categoryNamees: any;
  editCategor: string = 'New';
  categoryId: string = '';
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(res => {
      this.catagoryData = res;
    });
  }
  Onsubmit(data: CategoryInterface) {
    let categoryData = {
      category: data.NameOfCategory
    }
    if (this.editCategor == 'New') {
      this.categoryService.submitDataToDatabase(categoryData);
      this.categoryNamees = ' '
    } else if (this.editCategor == 'Edit') {
      this.categoryService.updateCategory(this.categoryId, categoryData);
      this.categoryNamees = ' '
    }
  }
  deleteCategory(data: string) {
    this.categoryService.deleteCategoryById(data);
  }
  editCategory(data: any, id: string) {
    this.categoryNamees = data;
    this.editCategor = "Edit"
    this.categoryId = id;
    console.log("this is id", id);
  }
}