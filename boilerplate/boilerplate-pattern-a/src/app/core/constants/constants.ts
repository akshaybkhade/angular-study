export class Constants {
  public static readonly COPYRIGHT_YEAR: string = new Date().getFullYear().toString();

  // API
  public static readonly TOKEN: string = 'token';
  public static readonly LOGGED_USER_DETAILS = 'userDetails';
  public static readonly AUTHORIZATION: string = 'Authorization';

  // Characters
  public static readonly STRING_EMPTY: string = '';
  public static readonly COMMA: string = ',';
  public static readonly SEMICOLON: string = ';';
  public static readonly COLON: string = ':';
  public static readonly UNDERSCORE: string = '_';

  // Common constants
  public static readonly DATE_FORMAT: string = 'dd/MM/yyyy';
  public static readonly TIME_FORMAT: string = 'HH:mm';
  public static readonly SECONDS_TIME_FORMAT: string = 'HH:mm:ss';
  public static readonly DEFAULT_FROM_TIME = '00:00:00';
  public static readonly DEFAULT_TO_TIME = '23:59:59';
  public static readonly MOBILE_PHONE_FORMAT = '+000-00-000-00';

  // Response code
  public static readonly SUCCESS_CODE: string = '000';

  // API Controller names
  public static readonly TRANSACTION_LIST = 'Transaction';
  public static readonly CARDHOLDER_LIST = 'Cardholder';
  public static readonly USER_LIST = 'User';

  // Grid Constants
  public static readonly DEFAULT_PAGE_SIZE = 5;
  public static readonly DEFAULT_PAGE_NUMBER = 1;
  public static readonly PAGE_SIZES = [5, 10, 20, 100];

  public static readonly USER_STATUS = ['All', 'Activated', 'Locked', 'Deleted'];
  public static readonly LOGIN_STATUS = ['All', 'Yes', 'No'];

  // local storage key
  public static readonly ACCESS_RIGHT_KEY: string = 'accessRights';

  // Routes
  public static readonly LOGIN_ROUTE = 'login';
  public static readonly TRANSACTION_LIST_ROUTE = '/transaction/transaction-list';
  public static readonly USER_LIST_ROUTE = '/user/user-list';
  public static readonly CREATE_USER_ROUTE = '/user/create-user';
  public static readonly USER_GROUP_LIST_ROUTE = '/user/user-group-list';
  public static readonly CREATE_USER_GROUP_ROUTE = '/user/create-user-group';
  public static readonly DEPARTMENT_LIST_ROUTE = '/department/department-list';
  public static readonly CREATE_DEPARTMENT_ROUTE = '/department/create-department';

  public static readonly YES = 'Y';
  public static readonly NO = 'N';

  public static readonly ToastrModuleGlobalConfig = {
    timeOut: 30000,
  };

}
