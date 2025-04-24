import "server-only";
import axios, { isAxiosError, type AxiosError } from "axios";
import { BACKEND_URL } from "~/utils/common";
import { getServerSession } from "./session.server";

export const httpNoAuth = axios.create({
  baseURL: BACKEND_URL,
});

export const http = axios.create({
  baseURL: BACKEND_URL,
});

http.interceptors.request.use(async (config) => {
  const session = await getServerSession();
  if (session)
    config.headers.set("Authorization", `Bearer ${session.accessToken}`);
  return config;
});

// Add a response interceptor
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (isAccessExpired(error)) {
      // `throw error` here will cause the "catch" block to run in following try-catch statement here (due to recursion)
      if (originalRequest._retry) throw error;
      originalRequest._retry = true;
      console.info("refreshing the access token");

      try {
        const session = await getServerSession();
        if (session) {
          originalRequest.headers.Authorization = `Bearer ${session.accessToken}`;
          return axios(originalRequest);
        }
      } finally {
        console.error(
          "unable to refresh the access token, redirecting to /login ...",
        );
      }
    }

    handleOtherFailures(error);
  },
);

httpNoAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    handleOtherFailures(error);
  },
);

function isAccessExpired(error: unknown) {
  return (
    isAxiosError(error) &&
    typeof error.response?.data?.trace === "string" &&
    error.response?.data?.trace.includes("JWT")
  );
}

function handleOtherFailures(error: AxiosError) {
  if (!error.response) {
    const message =
      "Can't connect to the backend server, contact the maintainers of the website!";
    throw { ...error, message };
  }

  throw error;
}
