import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../Services/post-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  constructor(
    private postDatas: PostServiceService,
    private postService: PostServiceService,
  ) {}
  
  PostDetails: any;
  ngOnInit(): void {
    this.postService.getAllPostData().subscribe((res) => {
      this.PostDetails = res;
    })
  }
  editBlog() {

  }
  deleteBlog(blodId: any) {
    this.postDatas.deleteBlog(blodId);
  }
}
