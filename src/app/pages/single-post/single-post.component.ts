import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  @Input() featured: any;
  constructor(private storage: AngularFirestore) { }
  ngOnInit(): void {
    console.log("ts", this.featured);
  }
 
}
