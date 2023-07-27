import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  permlnik: string = '';
  uploadedimage: any = '../../../../assets/img.jpg';
  selectedImage: any;
  constructor() { }
  ngOnInit(): void {
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
