import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RepositoryPreview } from '../../_models/repository-preview/repository-preview';
import { User } from '../../_models/user/user';
import { environment } from '../../../environments/environment';

const { URL_API, GTB_ACCSS_TKN } = environment;

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) { }

  getUser(userName: string) {
    return this.http.get<User>(`${URL_API}/${userName}`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString())
      .append('per_page', '6')
      .append('access_token', GTB_ACCSS_TKN());
    return this.http.get<RepositoryPreview[]>(`${URL_API}/${userName}/repos`, { params });
  }
}