import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Frontend-Service/service.service';

@Component({
  selector: 'app-single-catagory',
  templateUrl: './single-catagory.component.html',
  styleUrls: ['./single-catagory.component.css']
})
export class SingleCatagoryComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute, private service: ServiceService) { }
  categoriesData: Array<object> | undefined;
  ngOnInit(): void {
    this.activeRouter.params.subscribe(res => {
      const id = res['id']
      this.service.categoryPosts(id).subscribe(categories => {
        this.categoriesData = categories;
        console.log(categories);
      })
    })
  }
}
