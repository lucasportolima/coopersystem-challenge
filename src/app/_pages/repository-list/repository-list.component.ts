import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';
import { GithubService } from '../../_services/github/github.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  repositorys: RepositoryPreview[] = [];
  loading: boolean = false;
  value: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.name;
    this.repositorys = this.activatedRoute.snapshot.data.repositorys;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.value = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.loading = true;
    this.githubService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(repositorys => {
      this.repositorys = this.repositorys.concat(repositorys);
      if (!repositorys.length) this.hasMore = false;
      this.loading = false;
    })
  }
}
