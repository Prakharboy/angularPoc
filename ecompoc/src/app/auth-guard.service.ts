import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from  '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login-module/login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  Role:Boolean ; //0 for buyer ..1 for seller
  canRoute:Boolean = false;
  wrongAttempt:Boolean = false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.canRoute=this.loginService.canRoute;
  if(this.canRoute)
    {
      this.canRoute=false;



      return true;}
    else
    {  this.wrongAttempt= true;
      this.router.navigate(['/home']);
    return false;
  }
  }

  constructor(private router: Router,private loginService:LoginService) { }
}
