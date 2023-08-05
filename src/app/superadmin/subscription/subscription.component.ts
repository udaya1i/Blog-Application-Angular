import { Component, OnInit } from '@angular/core';
import { SuperadminCategoryServiceService } from '../Services/superadmin-category-service.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscribers: Array<object> | any;
  constructor(private service: SuperadminCategoryServiceService) { }
  ngOnInit(): void {
    this.service.getSubscriberDetail().subscribe(res => {
      console.log(res);
      

      this.subscribers = res;

    })
  }

}
