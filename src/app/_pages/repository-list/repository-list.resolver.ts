import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { GithubService } from '../../_services/github/github.service';
import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';

@Injectable({ providedIn: 'root' })
export class RepositoryListResolver implements Resolve<Observable<RepositoryPreview[]>> {

    constructor(private service: GithubService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RepositoryPreview[]> {
        return this.service.listFromUserPaginated(route.params.name, 1);
    }
}