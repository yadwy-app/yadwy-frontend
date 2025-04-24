import "client-only";

import axios, { AxiosError, isAxiosError } from "axios";
import { BACKEND_URL } from "~/utils/common";
import { getSession, refreshAccessToken, setSession } from "./session.client";

export const httpNoAuth = axios.create({
  baseURL: BACKEND_URL,
});

export const http = axios.create({
  baseURL: BACKEND_URL,
});

http.interceptors.request.use(async (config) => {
  const session = getSession();
  if (session)
    config.headers.set("Authorization", `Bearer ${session.accessToken}`);
  return config;
});

// Add a response interceptor
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (isAccessExpired(error)) {
      try {
        handleExpiredToken(error);
      } catch (e) {
        handleOtherFailures(e);
      }
    } else {
      handleOtherFailures(error);
    }
  },
);

httpNoAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    handleOtherFailures(error);
  },
);

function handleOtherFailures(error: unknown) {
  if (error instanceof AxiosError && !error.response)
    error.message =
      "Can't connect to the backend server, contact the maintainers of the website!";
  throw error;
}

let refreshTried = false;
async function handleExpiredToken(error: AxiosError) {
  const originalRequest = error.config;
  if (!originalRequest || refreshTried) {
    deleteSession();
    refreshTried = false;
    // `throw error` here will cause the "catch" block to run in following try-catch statement here (due to recursion)
    throw error;
  }

  console.info("refreshing the access token");
  refreshTried = true;

  try {
    const session = getSession();
    if (session) {
      const accessToken = await refreshAccessToken({
        refreshToken: session.refreshToken,
      });
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    }
    return http(originalRequest);
  } catch {
    deleteSession();
    return;
  } finally {
    refreshTried = false;
  }
}

function deleteSession() {
  setSession(null);
  window.location.reload();
  return;
}

function isAccessExpired(error: unknown) {
  return (
    isAxiosError(error) &&
    typeof error.response?.data?.trace === "string" &&
    error.response?.data?.trace.includes("JWT")
  );
}
