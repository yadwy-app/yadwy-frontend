## Middleware

- [Enable us to get path name from the server component.](https://medium.com/@beecodeguy/access-current-pathname-in-server-components-next-js-app-router-81686d2ed60f)

```ts
export default function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  headers.set("x-current-path", segments.join("/"));
}
```

- How to use

```ts
import { headers } from "next/headers";

const headerList = headers();
const pathname = headerList.get("x-current-path");
```
