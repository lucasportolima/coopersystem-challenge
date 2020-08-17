import { Injectable } from '@angular/core';
import { SessionStorageService } from '../../_services/session-storage/session-storage.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../_models/user/user';

@Injectable({ providedIn: 'root' })
export class AuthRepository implements CanActivate {

  constructor(
    private sessionStorageService: SessionStorageService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    const user: User = this.sessionStorageService.get('user');

    if (!user) {
      this.router.navigate([''])
      return false;
    }
    return true;
  }
}