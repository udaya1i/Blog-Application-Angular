import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Frontend-Service/service.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private service:ServiceService) { }
  subscriptionForm!:FormGroup

  ngOnInit(): void {
    this.subscriptionForm = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]]
    }) 

  }

  subscribe(){
    console.log(this.subscriptionForm.value);
    const subscriber={
      name:this.subscriptionForm.value.name,
      email:this.subscriptionForm.value.email
    }
    // this.service.subscriber(subscriber);
    this.service.checkDuplication(this.subscriptionForm.value.email).subscribe(res=>{
      console.log("test", res);
      
    })

  }
}
