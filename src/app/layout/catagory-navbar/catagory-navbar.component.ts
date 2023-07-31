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
  isUser: boolean = false;
  userEmail: string | any;

  ngOnInit(): void {

      if (localStorage.getItem('admin')) {
        this.userEmail = localStorage.getItem('admin')
        this.isUser = true;
      }

  }
  logOut() {
    setTimeout(() => {
      localStorage.removeItem('admin');
      this.isUser = false;
      this.route.navigate(['admin-auth/login'])
    }, 10);

  }

}
