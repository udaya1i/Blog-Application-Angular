import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-catagory-navbar',
  templateUrl: './catagory-navbar.component.html',
  styleUrls: ['./catagory-navbar.component.css']
})
export class CatagoryNavbarComponent implements OnInit {

  constructor( private router:ActivatedRoute) { }
  isUser:boolean = false;

  ngOnInit(): void {
  
    if(localStorage.getItem('admin')){
      this.isUser = true;
    }
  }

}
