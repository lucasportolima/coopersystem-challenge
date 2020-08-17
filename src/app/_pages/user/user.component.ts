import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GithubService } from 'src/app/_services/github/github.service';
import { swalNotification } from '../../_helper/SwalNotification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  userForm: FormGroup;
  loading: boolean = false;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private githubService: GithubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  search(): void {
    this.loading = true;
    const userName = this.userForm.get('userName').value;
    this.githubService.getUser(userName).subscribe(
      res => {
        this.loading = false;
        sessionStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['user', userName])
      },
      async err => {
        this.loading = false;
        this.userForm.reset();
        this.userNameInput.nativeElement.focus();
        if (err.status)
          await swalNotification('error', err.statusText);
        else
          await swalNotification('error', 'User not found!');
      })
  }
}
