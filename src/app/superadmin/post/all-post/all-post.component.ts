import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../Services/post-service.service';

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

  marked: boolean = false;
  PostDetails: any;
  ngOnInit(): void {
    this.postService.getAllPostData().subscribe((res: any) => {
      this.PostDetails = res;
      // if (res) {
      //   res[0].data.isFeatured = this.marked;
      //   // console.log(res[0].data.isFeatured);
      // }
    })
  }
  editBlog() {

  }
  deleteBlog(imagePath: any, id: string) {
    this.postDatas.deleteImage(imagePath, id);
  }
  featured(postId: string, value: boolean) {
    const featuredPost={
      isFeatured: value
    }
    this.postService.markFeatured(postId, featuredPost);
  }
}
