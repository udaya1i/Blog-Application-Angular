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
  datas: any;
  constructor(private rotuer: ActivatedRoute, private service: ServiceService) { }
  ngOnInit(): void {
    this.rotuer.params.subscribe(res => {
      this.service.getSingleCategory(res['id']).subscribe(res => {
        this.datas = res;
        console.log("this i sdata", res);
      })
    })
  }
}
