import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/common/user.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  // Inject
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isUser = this.userService.getUserStatus();
    if (!isUser) {
      this.router.navigate([environment.userLoginUrl]);
    }
    return isUser;
  }
}
