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
  ngOnInit(): void {
  }
  Onsubmit(data: CategoryInterface) {
   this.categoryService.submitDataToDatabase(data);
  }
}

