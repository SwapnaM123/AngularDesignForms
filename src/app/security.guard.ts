import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    debugger;
    var token = localStorage.getItem('token');
    if (token != null) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;     
    }

  }



}
