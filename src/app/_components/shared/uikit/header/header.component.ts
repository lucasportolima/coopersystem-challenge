import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user/user';
import { SessionStorageService } from '../../../../_services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShowDropdown: boolean = false;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {
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

  getUser(): User {
    return this.sessionStorageService.get('user');
  }
}
