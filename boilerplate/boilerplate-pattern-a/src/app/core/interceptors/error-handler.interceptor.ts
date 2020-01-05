import { Injectable, Injector, NgZone } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Constants } from '../constants/constants';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);

    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 || error.status === 403 || error.error.responseCode === 'A01') {
            ngZone.run(() => {
              router.navigate([Constants.LOGIN_ROUTE], { queryParams: { previousRoute: router.url } });
            });
          } else if (error.status === 0) {
            this.toastr.error(error.message, null, {
              closeButton: true
            });
          } else {
            this.toastr.error(error.error.message, null, {
              closeButton: true
            });
          }
        } else {
          console.error('Something else happened!');
        }

        return throwError(error);
      })
    );
  }
}
