import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user/user';
import { SessionStorageService } from '../../../../_services/session-storage/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShowDropdown: boolean = false;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) { }

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

  getUser(): User {
    return this.sessionStorageService.get('user');
  }
}
