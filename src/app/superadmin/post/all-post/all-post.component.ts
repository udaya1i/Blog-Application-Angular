import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../Services/post-service.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  constructor(
    private postDatas: PostServiceService,
    private postService: PostServiceService,
  ) { }
  PostDetails: any;
  ngOnInit(): void {
    this.postService.getAllPostData().subscribe(eg => {
      this.PostDetails = eg;
      console.log(eg);
    });
  }
  editBlog() {

  }
  deleteBlog(test: any) {
    console.log("test", test);
    this.postDatas.deleteBlog(test);
  }

}
