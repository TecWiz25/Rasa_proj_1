import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  userlogin:any;
  constructor(private http :HttpClient,private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!!localStorage.getItem("sessionUser")){
        // this.router.navigateByUrl('/home');
        return true;
      }
      else{
        this.router.navigateByUrl('/login');
      }

    return false;
  }
 
}