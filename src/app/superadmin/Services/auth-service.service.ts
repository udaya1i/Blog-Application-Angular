import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private authenticationService: AngularFireAuth,
    private message: ToastrService,
    private router: Router
  ) { }
  login(email: string, password: string) {
    this.authenticationService.signInWithEmailAndPassword(email, password).then(res => {
      console.log('login successfully', res);
      this.message.success('Login Successfully!');
      this.router.navigate(['/admin-dashboard'])
      this.loggedinUser();
      localStorage.setItem('admin', email)
    }).catch(e => {
      console.log("Invalid Credintial");
      this.message.error('Login Failed!')
    })
  }
  loggedinUser() {
 return this.authenticationService.authState.subscribe(res => {
      console.log(JSON.parse(JSON.stringify(res)));
    })
  }
}
