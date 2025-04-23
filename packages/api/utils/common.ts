import { jwtDecode } from "jwt-decode";

export const BACKEND_URL = process.env.BACKEND_URL;

export const cookiesKeys = {
  ACCESS_TOKEN_KEY: "the-access-token",
  REFRESH_TOKEN_KEY: "the-refresh-token",
  USER_ID_KEY: "the-user-id",
};

export function isTokenGoingToExpire(
  token: string,
  expirationTimeSeconds: number = 60 * 24, // one day
): boolean {
  const decodedToken = jwtDecode(token);
  if (!decodedToken.exp) return false;
  // Convert expiration time to seconds
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp - currentTime < expirationTimeSeconds;
}
