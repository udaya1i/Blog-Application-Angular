import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Frontend-Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPost: Array<object> | any;
  constructor(private service: ServiceService, private frontendService: ServiceService) { }
  ngOnInit(): void {
    this.frontendService.getFeaturedPost().subscribe(res => {
      this.featuredPost = res;
    })
  }
}
