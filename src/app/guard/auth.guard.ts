import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private toastr:ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): boolean {
    const userRole = this.authService.getUserRole();
    const isEmployeeRoute = route.url.length > 0 && route.url[0].path === 'employee';
    if (this.authService.isLoggedin()) {
      if ( userRole != 'employee') {
        return true;
      } else if (isEmployeeRoute) {
        this.toastr.warning('You do not have access to this page');
        this.router.navigate(['login']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  }

