import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from 'src/app/_models/user/user';
import { SessionStorageService } from '../../../../_services/session-storage/session-storage.service';
import * as UserActions from '../../../../_actions/user.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<any>;
  isShowDropdown: boolean = false;

  constructor(
    private router: Router,
    private store: Store<{ user: User }>,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.pipe(
      select('user')
    )
    let user = this.sessionStorageService.get('user');
    if (user)
      this.store.dispatch(UserActions.actionSetUser({ payload: user }));
  }

  isHome(): boolean {
    return location.href.toString().indexOf('/user') >= 0
  }

  goOut(): void {
    this.sessionStorageService.remove('user');
    this.toggleDropdown();
    this.router.navigate(['']);
  }

  toggleDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown
  }
}
