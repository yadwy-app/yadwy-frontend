# @yadwy/api

The `@yadwy/api` package provides utilities and logic for interacting with the backend API. It is designed to work seamlessly on both the client and server sides, handling authentication, token management, and API requests efficiently.

**Client-Side:** Directly call the backend API without using the server as a proxy. This reduces latency and avoids unnecessary server-side overhead.

**Server-Side:** Use the same API logic to call the backend, ensuring consistency across environments.

> Some duplication in the API layer is necessary to provide functionality for both client and server environments.

## Features

- **Authentication**:

  - Login and token storage (client-side).
  - Token usage on both server and client (via cookies).
  - Automatic token refresh before expiration.
  - Handling expired tokens gracefully.

- **Route Protection and Permissions Handling**:

  - Server-side session validation.
  - Client-side session management with reactivity.
  - Hooks and utilities to check the permissions of the user

- **API Communication**:
  - Supports direct backend calls from the client.
  - Avoids unnecessary server-side proxying for client requests.

---

## Authentication Workflow

### 1. Login and Storing Tokens

- Tokens (access and refresh) are stored securely in cookies on the client side after login.
- Cookies are HTTP-only to prevent client-side tampering.

### 2. Using Tokens

- Token are stored in cookies in the browser
  - Zustand store is used to handle updating the session so that all the components that used the session (with `useSession` hook) are notifed by the update.
- Tokens are automatically included during the communication with the Next.js server (the frontend server).
- Axios library is used to add the authentication header in a request interceptor.

### 3. Updating Tokens Before Expiration

- Tokens are refreshed before they expire to ensure uninterrupted user sessions.
- Using `await getServerSession()` (server-side) or `useSession` will check the expiration date and udpate the access token 1 day before expiration.
  - Check if the access token is near expiration using `isTokenGoingToExpire(accessToken)`
  - If the token is expiring, refresh it.
  - If the token cannot be refreshed, unset cookies and return `null`.
  - Otherwise, return session info (access token, refresh token, and user ID).
- Expired tokens are unlikely due to proactive token refresh logic.
- Possible scenarios for expired tokens:
  - User returns to the website after a long period.
  - Backend misconfiguration or changes to token expiration.
  - Middleware is skipped or cached, preventing token refresh.
  - The token expiration date be far from now but it is blacklisted in the backend or not valid anymore

Let's not keep any room for error and handle 401 errors error in an Axios response interceptor:

- During SSR:
  - Refresh the token and use it for the current process.
  - Cookies may not be updated during SSR (as per Next.js docs), the new access token will be used only once and lost after that.
  - The access token will be updated later when the expiration of the token is detected in the client-side or in a server action or a Next.js route handler
- In the client side:
  - Refresh the token and upate the cookies and the Zustand store.
- In a Next.js server action or a route handler:
  - Refresh the access token and update the cookies easily (👉 TODO: we need to update the Zustand store)

## Protecting Routes and Checking Permissions

- Use `useSession()` or `getServerSession()` to get the session
- If the session is `null`, redirect the user or show a fallback page.
- Get the user permissions using `useUserPermissions` or `await getUserPermissions()` and check if they have the required permissions

## Example Usage

### Login and Token Management

**Login and store tokens:**

```tsx
import { authHooks } from "@yadwy/api/hooks";
import { setSession } from "@yadwy/api/utils/session.client";

const login = authHooks.login({
  onSuccess({ accessToken, refreshToken, user: { id: userId } }) {
    setSession({ accessToken, refreshToken, userId });
  },
});

<Button
  isLoading={login.isPending}
  onClick={() => login.mutateAsync({ username: "user", password: "pass" })}
/>;
```

**Access session state:**

```ts
import { useSession, setSession } from "@yadwy/api/utils/session.client";
const session = useSession(); // or getSession() outside the react components
console.log(session.accessToken);
```

### Protecting Routes

```ts
import { getServerSession } from "@yadwy/api/utils/session.server";

export async function SomeWhereInTheServer(context) {
  const session = await getServerSession();

  if (!session) {
    return <p>Please login first</p>;
  }

  return <p>Great, you are authenticated</p>;
}
```

The following is an example of how the permissions may be handled, **but not yet implemented**.

```ts
import { useUserPermissions } from "@yadwy/api/permissions/client";

export async function SomeWhereInTheClient(context) {
  const isAuthorized = useUserPermissions([permissions.orderesSummary.canView]);

  if (!isAuthorized) {
    return <p>You don't have the permission</p>;
  }

  return <p>Great, you are authorized</p>;
}
```
