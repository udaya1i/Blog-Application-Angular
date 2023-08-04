import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Frontend-Service/service.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private service: ServiceService) { }
  datas: any;
  categoryId: string | any;
  relatedProduct: Array<object> | undefined;
  ngOnInit(): void {
    this.activeRouter.params.subscribe(res => {
      this.service.getSingleCategory(res['id']).subscribe(res => {
        this.datas = res;
        this.categoryId = this.datas.category.categoryId;
        this.relatedPost();
      });
      console.log('this is test file with view count', res);
      this.service.count(res['id'])
      

    });
  }
  relatedPost() {
      this.service.categoryRelatedPosts(this.categoryId).subscribe(res => {
        this.relatedProduct = res;
      })
  }
}

