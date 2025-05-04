import { routing } from "@/i18n/routing";
import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  const [, _locale, ...segments] = request.nextUrl.pathname.split("/");
  const IntlResponse = intlMiddleware(request);
  IntlResponse.headers.set("x-current-path", segments.join("/"));
  return IntlResponse;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
