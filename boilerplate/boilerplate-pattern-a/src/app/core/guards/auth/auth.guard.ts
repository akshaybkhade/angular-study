import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

import { Constants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  /**
     * canActivate: this is a implementation of the canActive method from 'CanActivate' interface.
     * This method will return true if the user is authenticated. If local storage has logged-in users data only then it will return true.
     */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLocalStorage();
  }

  /**
   * checkLocalStorage: This method checks for the local storage information of authenticated user.
   */
  checkLocalStorage(): boolean {
    const userDetails = JSON.parse(localStorage.getItem(Constants.LOGGED_USER_DETAILS));

    if (!userDetails) {
      this.router.navigate([Constants.LOGIN_ROUTE]);
      return false;
    } else {
      return true;
    }
  }
}
