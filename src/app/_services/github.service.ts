import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { RepositoryPreview } from '../_models/repository-preview/repository-preview';
import { environment } from '../../environments/environment';

const API = environment.URL_API;

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) { }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString())
      .append('per_page', '6')
      .append('access_token', 'b23a00e0624a37219164c91a1a9d9fd661eb3dd1');
    return this.http.get<RepositoryPreview[]>(`${API}/${userName}/repos`, { params });
  }
}