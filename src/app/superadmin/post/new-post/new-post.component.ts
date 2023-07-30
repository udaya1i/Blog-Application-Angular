import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../../Services/superadmin-category-service.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { NewPostInterface } from 'src/app/interfaces/new-post-interface';
import { PostServiceService } from '../../Services/post-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  permlnik: string = '';
  uploadedimage: any = '../../../../assets/img.jpg';
  selectedImage: any;
  category: any;
  postForm!: FormGroup;
  constructor(
    private service: SuperadminCategoryServiceService,
    private formBuildre: FormBuilder,
    private postService: PostServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((res) => {
      console.log(res);
    })
  }
  ngOnInit(): void {


    this.service.getCategory().subscribe(cate => {
      this.category = cate;
    });
    this.postForm = this.formBuildre.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      categorySelector: ['', Validators.required],
      permlink: ['', Validators.required],
      image: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      content: ['', [Validators.required, Validators.minLength(100)]],
    });
  }
  onKeyUp(value: any) {
    const titlevalue = value.target.value;
    this.permlnik = titlevalue.replace(/\s/g, '-')
  }
  showPreview($event: any) {
    const img = new FileReader();
    img.onload = (e) => {
      this.uploadedimage = e.target?.result
    }
    img.readAsDataURL($event.target.files[0])
    this.selectedImage = $event.target.files[0];
  }

  sumbitNewPost() {
    let splitCategoryData = this.postForm.value.categorySelector.split('-');
    const PostData: NewPostInterface = {
      title: this.postForm.value.title,
      permLink: this.postForm.value.permlink,
      category: {
        categoryId: splitCategoryData[0],
        category: splitCategoryData[1]
      },
      ImagePath: this.postForm.value.image,
      isFeatured: false,
      views: 0,
      status: 'New',
      createdAt: new Date(),
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
    }
    this.postService.uploadImage(this.selectedImage, PostData);
    this.postForm.reset();

    this.router.navigate(['posts'])
  }
}
