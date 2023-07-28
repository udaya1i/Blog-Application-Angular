import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../../superadmin-category-service.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
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
  constructor(private service: SuperadminCategoryServiceService, private formBuildre: FormBuilder) {

  }
  ngOnInit(): void {
    this.service.getCategory().subscribe(cate => {
      this.category = cate;
    });
    this.postForm = this.formBuildre.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      permlink: ['', Validators.required],
      content: ['', Validators.required],
      categorySelector: ['', Validators.required]
    });
  }
  onKeyUp(value: any) {
    const titlevalue = value.target.value;
    this.permlnik = titlevalue.replace(/\s/g, '-')
    console.log(this.permlnik);
  }
  showPreview($event: any) {
    const img = new FileReader();
    img.onload = (e) => {
      this.uploadedimage = e.target?.result
    }
    img.readAsDataURL($event.target.files[0])
    this.selectedImage = $event.target.files[0];
  }
}
