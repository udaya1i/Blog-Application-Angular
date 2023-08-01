import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/superadmin/Services/auth-service.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-catagory-navbar',
  templateUrl: './catagory-navbar.component.html',
  styleUrls: ['./catagory-navbar.component.css']
})
export class CatagoryNavbarComponent implements OnInit {

  constructor(private router: ActivatedRoute, private authservice: AuthServiceService, private route: Router) { }
  isAdmin: boolean = true;
  userEmail: string | any;

  ngOnInit(): void {
    if (localStorage.getItem('admin')) {
      this.userEmail = localStorage.getItem('admin')
    }
    this.authservice.isAdmin.subscribe(res => {
      this.isAdmin = res
    })
  }
  logOut() {
    this.authservice.logout();
    this.authservice.isAdmin.subscribe(res => {
      this.isAdmin = res
    })
  }
}
