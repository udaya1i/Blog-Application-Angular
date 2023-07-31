import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthServiceService
  ) { }
  loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailaddr: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  loginUser() {
    const userCrenditial = {
      email: this.loginForm.value.emailaddr,
      password: this.loginForm.value.password
    }
    this.authService.login(userCrenditial.email, userCrenditial.password)
  }
}
