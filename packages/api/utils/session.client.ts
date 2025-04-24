import "client-only";
import { create } from "zustand";
import { httpNoAuth } from "./axios.client";
import { isTokenGoingToExpire } from "./common";
import {
  AccessTokenCookie,
  RefreshTokenCookie,
  UserIdCookie,
} from "./cookies.client";
import type { Session } from "./types";

// Zustand store for session
interface SessionState {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useSessionStore = create<SessionState>((set) => ({
  session: getSession(),
  setSession: (session) => {
    if (!session) {
      AccessTokenCookie.delete();
      RefreshTokenCookie.delete();
      UserIdCookie.delete();
    } else {
      const { accessToken, refreshToken, userId } = session;
      AccessTokenCookie.set(accessToken, "/");
      RefreshTokenCookie.set(refreshToken, "/");
      UserIdCookie.set(userId, "/");
    }
    set({ session });
  },
}));

export function getSession() {
  const accessToken = AccessTokenCookie.get();
  const refreshToken = RefreshTokenCookie.get();
  const userId = UserIdCookie.get();

  if (!accessToken || !refreshToken || !userId) {
    return null;
  }

  return { accessToken, refreshToken, userId };
}

export function useSession() {
  const session = useSessionStore((state) => state.session);
  const setSession = useSessionStore((state) => state.setSession);
  if (!session) return null;
  if (isTokenGoingToExpire(session.accessToken)) {
    refreshAccessToken({ refreshToken: session.refreshToken })
      .then((newAccessToken) => {
        AccessTokenCookie.set(newAccessToken, "/");
        setSession({ ...session, accessToken: newAccessToken });
      })
      .catch((e) => {
        console.log("unable to refresh the access token", e);
        setSession(null);
      });
  }
  return session;
}

export function setSession(session: Session | null) {
  const { setSession: setSessionStore } = useSessionStore.getState();
  setSessionStore(session);
}

export async function refreshAccessToken(data: { refreshToken: string }) {
  const {
    data: { access: accessToken },
  } = await httpNoAuth.post<{ access: string }>("/users/refresh/", data);
  return accessToken as string;
}
