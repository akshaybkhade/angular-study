// Angular
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static validateName (control: AbstractControl) {
    try {
      if (control.value === '' || control.value === null || /^[a-zA-Z ]*$/.test(control.value)) {
        return null;
      }
    } catch (e) {
    }
    return {'isName': true};
  }

  static passwordValidator(control: AbstractControl) {
    if (
      !/[0-9]/.test(control.value) ||
      !/[a-z]/.test(control.value) ||
      !/[A-Z]/.test(control.value)
    ) {
      // return {isNotContainNumber : true};
      return { isInvalidPassword: true };
    }

    return null;
  }

  static passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmPassword').value ? null : { mismatch: true };
  }
}
