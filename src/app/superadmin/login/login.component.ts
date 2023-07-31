import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailaddr: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    console.log("this is tes");
    console.log(this.loginUser);
    
    
    
  }
  loginUser(){
    const userCrenditial = {
      title: this.loginForm.value.emailaddr,
      password: this.loginForm.value.password
    }
    console.log(userCrenditial);
    
  }
}
