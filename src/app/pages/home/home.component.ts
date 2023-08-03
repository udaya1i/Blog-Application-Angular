import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Frontend-Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPost: Array<object> | undefined;
  allPost: any;
  recentPost: Array<object> | undefined;
  constructor(private frontendService: ServiceService) { }
  ngOnInit(): void {
    this.getFeaturedBlogDatas();
    this.getAllPostData();
    this.latestBlog();
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
  latestBlog() {
    this.frontendService.getRecentBlog().subscribe(res => {
      this.recentPost = res;
    })
  }
  
}
