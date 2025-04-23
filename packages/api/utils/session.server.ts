import "server-only";
import { jwtDecode } from "jwt-decode";
import { z } from "zod";
import { httpNoAuth } from "./axios.server";
import { isTokenGoingToExpire } from "./common";
import {
  AccessTokenServerCookie,
  RefreshTokenServerCookie,
  UserIdServerCookie,
} from "./cookies.server";
import type { Session } from "./types";

export async function setServerSession(session: Session | null) {
  if (!session) {
    await AccessTokenServerCookie.delete();
    await RefreshTokenServerCookie.delete();
    await UserIdServerCookie.delete();
    return;
  }
  const { accessToken, refreshToken, userId } = session;
  await AccessTokenServerCookie.set(accessToken, "/");
  await RefreshTokenServerCookie.set(refreshToken, "/");
  await UserIdServerCookie.set(userId, "/");
}

export async function getServerSession() {
  let accessToken = await AccessTokenServerCookie.get();
  const refreshToken = await RefreshTokenServerCookie.get();
  const userId = await UserIdServerCookie.get();
  if (!accessToken || !refreshToken || !userId) return null;
  if (isTokenGoingToExpire(accessToken)) {
    try {
      accessToken = await refreshAccessToken({ refreshToken });
      AccessTokenServerCookie.set(accessToken, "/");
    } catch (e) {
      console.log("unable to refresh the access token", e);
      await setServerSession(null);
      return null;
    }
  }
  return {
    accessToken,
    refreshToken,
    userId,
  };
}

export async function getCurrentServerUser() {
  const session = await getServerSession();
  if (!session) return null;
  // TODO: fetch the user from the backend because the user info may be updated (i.e. user got a new role)
  try {
    const decoded = jwtDecode(session.accessToken);
    const data = z
      .object({
        id: z.string().uuid(),
        role: z.enum(["CUSTOMER"]),
      })
      .parse(decoded);
    return {
      userId: data.id,
      userRole: data.role,
    };
  } catch (e) {
    await setServerSession(null);
    console.error("can't get the user", e);
  }
  return null;
}

export async function refreshAccessToken(data: { refreshToken: string }) {
  const {
    data: { access: accessToken },
  } = await httpNoAuth.post<{ access: string }>("/users/refresh/", data);
  return accessToken as string;
}
