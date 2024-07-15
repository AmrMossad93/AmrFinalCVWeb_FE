export class InputPattern {
  static readonly MOBILE: RegExp = /^(05)([5|0|3|6|4|9|1|8|7])([\d]{7})$/; // /^(009665|9665|\+9665|05)([5|0|3|6|4|9|1|8|7])([\d]{7})$/
  static readonly OTP: RegExp = /^([\d]{4})$/;
  static readonly NATIONAL_ID_LENGTH: RegExp = /^([\d]{10})$/;
  static readonly NATIONAL_ID_VALID: RegExp = /^([1-2])([0-9]{0,10})$/;
  static readonly COMPANY_ID_VALID: RegExp = /^7\d+$/;
  static readonly SELLER_VALID: RegExp = /^([1-2-7])([0-9]{0,10})$/;
  static readonly CUSTUM_CARD: RegExp = /^[0-9]{1,10}$/;
  static readonly SQUEANCE_NO: RegExp = /^[0-9]{1,10}$/;
  static readonly EMAIL: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+com))$/;
  static readonly IBAN: RegExp =
    /^\b[0-9]{2}(?:[ ]?[0-9]{4}){5}(?!(?:[ ]?[0-9]){3})$/;
  static readonly PASSWORD: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$#!%*?&]{8,15}$/;
  static readonly ALPHANUMERIC: RegExp = /^[a-zA-Z]{3}\d{3}$/;
}
