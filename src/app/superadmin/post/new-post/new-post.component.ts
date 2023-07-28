import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../../superadmin-category-service.service';
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
  constructor(private service: SuperadminCategoryServiceService) { }
  ngOnInit(): void {
    this.service.getCategory().subscribe(cate => {
      this.category = cate;
    });
  }
  onKeyUp(value: any) {
    const titlevalue = value.target.value;
    this.permlnik = titlevalue.replace(/\s/g, '-')
    console.log(this.permlnik);
  }
  showPreview($event: any) {
    console.log("this is imvae", typeof this.selectedImage);
    const img = new FileReader();
    img.onload = (e) => {
      this.uploadedimage = e.target?.result
    }
    img.readAsDataURL($event.target.files[0])
    this.selectedImage = $event.target.files[0];
  }
}
