import { Injectable } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Constants } from '../../constants/constants';
// import { MaskPipe } from 'ngx-mask';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private phoneNumber = Constants.MOBILE_PHONE_FORMAT;
  private dateTimeSeconds = `${Constants.DATE_FORMAT} ${Constants.SECONDS_TIME_FORMAT}`;
  private dateTime = `${Constants.DATE_FORMAT} ${Constants.TIME_FORMAT}`;
  private date = Constants.DATE_FORMAT;

  constructor(
    // private maskPipe: MaskPipe,
    private datePipe: DatePipe,
    private numberPipe: DecimalPipe
  ) { }

  transformValue(options: Options): string {
    switch (options.type) {
      // case 'phoneNumber':
      //   return this.maskPipe.transform(options.value, this.phoneNumber);
      case 'dateTimeSeconds':
        return this.datePipe.transform(options.value, this.dateTimeSeconds);
      case 'dateTime':
        return this.datePipe.transform(options.value, this.dateTime);
      case 'date':
        return this.datePipe.transform(options.value, this.date);
      case 'number':
        return this.numberPipe.transform(options.value);
      default:
        return options.value;
    }
  }

  ifAllPropertiesIsNull(object: Object): boolean {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] !== null && object[key] !== '') {
          return false;
        }
      }
    }

    return true;
  }
}

class Options {
  type: string;
  value: any;
}
