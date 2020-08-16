import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RepositoryPreview } from '../_models/repository-preview/repository-preview';
import { environment } from '../../environments/environment';

const { URL_API, GITHUB_ACCESS_TOKEN } = environment;

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) { }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString())
      .append('per_page', '6')
      .append('access_token', GITHUB_ACCESS_TOKEN);
    return this.http.get<RepositoryPreview[]>(`${URL_API}/${userName}/repos`, { params });
  }
}