import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../superadmin-category-service.service';
import { CategoryInterface } from 'src/app/interfaces/category-interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  // animations: [myNgIfAnimation] // <-- Don't forget!

})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: SuperadminCategoryServiceService, private toaster:ToastrService ) { }
  catagoryData:any
  categoryNamees:any;
  editCategor:string='New';
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(res=>{
      console.log("this is data",res);
      this.catagoryData = res;
    })
    
  }
  Onsubmit(data: CategoryInterface) {
   this.categoryService.submitDataToDatabase(data);
  //  this.
  }
  deleteCategory(data:CategoryInterface){
    console.log("this is id", data);
    this.categoryService.deleteCategoryById(data);
  }
  editCategory(data:any){
    this.categoryNamees  = data;
    this.editCategor = "Edit"

  }
  update(){
    
  }

}

