import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GithubService } from 'src/app/_services/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  userForm: FormGroup;
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
    const userName = this.userForm.get('userName').value;
    this.githubService.listFromUserPaginated(userName, 1).subscribe(
      () => this.router.navigate(['user', userName]),
      err => {
        this.userForm.reset();
        this.userNameInput.nativeElement.focus();
        alert('User not found!');
      })
  }
}
