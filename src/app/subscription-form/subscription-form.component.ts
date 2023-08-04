import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../Frontend-Service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: ServiceService, private message: ToastrService) { }
  subscriptionForm!: FormGroup
  userExist:boolean = false;
  userNotExist:boolean= false;


  ngOnInit(): void {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  subscribe() {
    console.log(this.subscriptionForm.value);
    const subscriber = {
      name: this.subscriptionForm.value.name,
      email: this.subscriptionForm.value.email
    }
    this.service.checkDuplication(this.subscriptionForm.value.email).subscribe(res => {

      if (res) {
        console.log('Email already exists:', res);
        this.message.error('Already Subscribed', res)
        this.userExist = true;
        this.subscriptionForm.reset();
        setTimeout(() => {
          this.userExist = false;
        }, 5000);
      }
      else {
        this.service.subscriber(subscriber);
        this.userNotExist = true;
        this.subscriptionForm.reset();

        
      }
    });
  }
}
