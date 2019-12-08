// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Environment
import { environment } from 'src/environments/environment';

// Service
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url = environment.apiBaseURL;
  url = ``;
  urlProfiles = `${this.url}/users`;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(loginUser: {}): Observable<any> {
    return this.http.post(`${this.url}/login`, loginUser);
  }

  logout() {
    return this.http.put(`${this.url}/logout`, {});
  }

  sendEmail(params): Observable<{}> {
    const data = encodeURIComponent(params.email);
    const url = `${this.urlProfiles}/`;
    return this.http.put<{}>(url, '')
      .pipe(catchError(err => { throw new Error(err.error.message); }));
  }
}
