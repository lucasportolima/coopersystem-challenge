import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionStorageService } from '../../_services/session-storage/session-storage.service';
import { User } from '../../_models/user/user';

@Injectable({ providedIn: 'root' })
export class AuthUserGuard implements CanActivate {

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    const user: User = this.sessionStorageService.get('user');

    if (user) {
      this.router.navigate(['user', user.login])
      return false;
    }
    return true;
  }
}