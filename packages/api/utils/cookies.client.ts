import "client-only";
import Cookies from "js-cookie";
import { cookiesKeys } from "./common";

export const AccessTokenCookie = createCookieStorage(
  cookiesKeys.ACCESS_TOKEN_KEY,
);
export const RefreshTokenCookie = createCookieStorage(
  cookiesKeys.REFRESH_TOKEN_KEY,
);
export const UserIdCookie = createCookieStorage(cookiesKeys.USER_ID_KEY);

const THREE_DAYS_ms = 1000 * 60 * 60 * 24 * 3;

function createCookieStorage<T extends string>(COOKIE_KEY: string) {
  return {
    set: (data: T, rootPath: string) => {
      Cookies.set(COOKIE_KEY, data, {
        expires: new Date(Date.now() + THREE_DAYS_ms),
        path: rootPath,
        httpOnly: true,
      });
    },
    get: () => {
      const data = Cookies.get(COOKIE_KEY);
      if (data) return data as T;
    },
    delete: () => {
      Cookies.remove(COOKIE_KEY);
    },
  };
}
