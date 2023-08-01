import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardGuard implements CanActivate {
  constructor(private message:ToastrService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('admin')) {
      console.log("access granded");
      
      return true;
    } else {
      console.log("access denied");
      this.message.warning("Access denied!!, Login to access this page");
      this.router.navigate(['/admin-auth/login'])
      return false;
    }
  }
}
