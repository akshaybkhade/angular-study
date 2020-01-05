import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';
import { Constants } from '../constants/constants';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private storageService: StorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.addToken(request);

    return next.handle(this.addToken(request));
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    const loggedUserDetails = JSON.parse(this.storageService.get(Constants.LOGGED_USER_DETAILS));

    if (!loggedUserDetails) {
      return request;
    }

    request = request.clone({
      setHeaders: {
        Authorization: `${loggedUserDetails.tokenType} ${loggedUserDetails.accessToken}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });

    return request;
  }
}
