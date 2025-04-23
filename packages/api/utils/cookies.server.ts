import "server-only";
import { cookies } from "next/headers";
import { cookiesKeys } from "./common";

export const RefreshTokenServerCookie = createCookieStorage(
  cookiesKeys.REFRESH_TOKEN_KEY,
);
export const AccessTokenServerCookie = createCookieStorage(
  cookiesKeys.ACCESS_TOKEN_KEY,
);
export const UserIdServerCookie = createCookieStorage(cookiesKeys.USER_ID_KEY);

// TODO: use the same expiration time as the access tokens (actually, use less time)
const THREE_DAYS_ms = 1000 * 60 * 60 * 24 * 3;

/**
 * From the Next.js 15 docs: HTTP does not allow setting cookies after streaming starts,
 * so you must use .set in a Server Action or Route Handler
 * @param COOKIE_KEY The name of the cookie that will be managed
 */
function createCookieStorage<T extends string>(COOKIE_KEY: string) {
  return {
    set: async (data: T, rootPath: string) => {
      const cookieStore = await cookies();
      cookieStore.set(COOKIE_KEY, data, {
        expires: new Date(Date.now() + THREE_DAYS_ms),
        path: rootPath,
      });
    },
    get: async () => {
      const cookieStore = await cookies();
      const data = cookieStore.get(COOKIE_KEY);
      if (data) return data.value as T;
    },
    delete: async () => {
      const cookieStore = await cookies();
      cookieStore.delete(COOKIE_KEY);
    },
  };
}
