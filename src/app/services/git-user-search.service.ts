import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { apiUserSearchUrl, apiFollowersUrl, oAuthToken } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapperClass } from './mapper.class';

@Injectable({
  providedIn: 'root'
})
export class GitUserSearchService {
  constructor(private http: HttpClient) {
  }
  public getGitHubUser(userName: string): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    let params = new HttpParams();
    params = params.append('q', userName);

    return this.http.get(apiUserSearchUrl, { headers, params }).pipe(map((response: any) => {
        return response.items.map(item => {     
        return new MapperClass(
          item.login, 
          item.avatar_url, 
          item.html_url, 
          this.getGitHubUserFollowers(item.login), 
          this.getGitHubUserRepos(item.login), 
          this.getGitHubUserSubscriptions(item.login),
          this.getGitHubUserDetail(item.login)
          );   
      });

    }));


  }
  public getGitHubUserFollowers(userName: string): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    return this.http.get<any>(`${apiFollowersUrl}${userName}/followers?per_page=10`, { headers });

  }
  public getGitHubUserRepos(userName: string): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    return this.http.get<any>(`${apiFollowersUrl}${userName}/repos`, { headers });

  }
  public getGitHubUserSubscriptions(userName: string): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    return this.http.get<any>(`${apiFollowersUrl}${userName}/subscriptions`, { headers });

  }

  public getGitHubUserDetail(userName: string): Observable<any> {
    const headers: HttpHeaders = this.getHeader();
    return this.http.get<any>(`${apiFollowersUrl}${userName}`, { headers });
  }

  private getHeader(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    if (oAuthToken)
    headers.set('Authorization', `token ${oAuthToken}`);
    return headers;
  }
}
