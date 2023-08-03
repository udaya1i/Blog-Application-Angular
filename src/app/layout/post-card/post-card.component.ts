import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  constructor(private router:Router) { }
  @Input() postData: Array<object> | any;
  ngOnInit(): void {
    console.log("postdata", this.postData);
    
  }
  openSinglePage(id:string){
    console.log("clicked", id);
    this.router.navigate(['/single-post/',id])
  }
}
