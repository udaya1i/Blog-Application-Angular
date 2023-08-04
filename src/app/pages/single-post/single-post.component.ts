import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Frontend-Service/service.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  // datas: any;
  // relatedPost: Array<object> | undefined;
  // constructor(private rotuer: ActivatedRoute, private service: ServiceService) { }
  // ngOnInit(): void {
  //   this.rotuer.params.subscribe(res => {
  //     this.service.getSingleCategory(res['id']).subscribe(res => {
  //       this.datas = res;
  //       console.log("this i sdata", res);
  //     })
  //   })
  //   this.rotuer.params.subscribe(res => {
  //     const id = res['id']
  //     console.log("thsi is isddddddddddddddddddddddddddddd", id);

  //     this.service.categoryPosts(id).subscribe(categories => {
  //       this.relatedPost = categories;
  //       console.log(categories, 'which data are you testing?');
  //     })
  //   })
  // }

  constructor(private activeRouter: ActivatedRoute, private service: ServiceService) { }
  categoriesData: Array<object> | undefined;
  datas: any;
  ngOnInit(): void {
    this.activeRouter.params.subscribe(res => {
      const id = res['id']
      this.service.categoryPosts(id).subscribe(categories => {
        this.categoriesData = categories;
        console.log(categories, 'this i swhat i wakjaklsjdfasdfasdf');
      })
    })

    this.activeRouter.params.subscribe(res => {
      this.service.getSingleCategory(res['id']).subscribe(res => {
        this.datas = res;
        console.log("this i sdata", res);
      })
    })
  }
}

