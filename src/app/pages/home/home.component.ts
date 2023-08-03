import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Frontend-Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPost: any;
  allPost: any;
  constructor(private frontendService: ServiceService) { }
  ngOnInit(): void {
    this.getFeaturedBlogDatas();

    this.getAllPostData();
  }
  getFeaturedBlogDatas() {
    this.frontendService.getFeaturedPost().subscribe(res => {
      this.featuredPost = res;
    })
  }
  getAllPostData() {
    this.frontendService.getAllPosts().subscribe(res => {
      this.allPost = res;
    })
  }
}
