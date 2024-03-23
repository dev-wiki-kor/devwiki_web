import {
  cookieValueToObj,
  makeCookieValue,
} from '@/shared/helper/Cookies/util';
import { IS_NODE } from '@/shared/constant/global';

interface ICookieOptions {
  expires?: Date | number | string;
  path?: string;
  domain?: string;
  secure?: boolean;
}

export default class CookieClient {
  static getCookie(name: string) {
    if (IS_NODE) return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';')[0];
    return null;
  }

  static setCookie(name: string, value: string, options: ICookieOptions = {}) {
    const opt: ICookieOptions = {
      path: '/',
      ...options,
    };

    if (opt.expires instanceof Date) {
      opt.expires = opt.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    Object.entries(opt).forEach(([k, v]) => {
      updatedCookie += `; ${k}`;
      if (v !== true) updatedCookie += `=${v}`;
    });

    document.cookie = updatedCookie;
  }

  static deleteCookieValue(name: string, deleteName: string) {
    const value = this.getCookie(name);
    if (!value) return null;
    const obj = cookieValueToObj(value);
    delete obj[deleteName];
    return makeCookieValue(obj);
  }
}
