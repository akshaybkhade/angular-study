import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from '../constants/constants';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);

    if (error instanceof HttpErrorResponse) {
      // Server Error
      // console.log('error', error);
    } else {
      // Client Error
      // console.log('rejection', error.rejection);
    }

    // if (error instanceof HttpErrorResponse) {
    //   // Server or connection error happened
    //   if (!navigator.onLine) {
    //     // Handle offline error
    //     console.error('No Internet Connection' + error.message);
    //   } else {
    //     // Handle Http Error (error.status === 403, 404...)
    //     if (error.status === 401 || error.status === 403) {
    //       ngZone.run(() => {
    //         router.navigate([Constants.LOGIN_ROUTE], { queryParams: { previousRoute: router.url } });
    //       });
    //     }
    //   }
    // } else {
    //   // Handle Client Error (Angular Error, ReferenceError...)
    // }  // Log the error anyway
    // console.error(error.message);
  }
}
