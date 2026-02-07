import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTimeZone } from "next-intl/server";
import { Providers } from "../providers";
import "~/styles/globals.css";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "~/components/ui/toaster";
import { cn } from "~/lib/utils";
import { alexandria, ibmPlexSansArabic } from "~/styles/fonts";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const timezone = await getTimeZone();

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        lang={locale}
        dir={dir}
        suppressHydrationWarning
        className={cn(
          "scrollbar scrollbar-thumb-rounded-2x min-h-screen transition-all",
          alexandria.variable,
          ibmPlexSansArabic.variable,
        )}
      >
        <NextTopLoader color="var(--color-primary)" />
        <div dir={dir} lang={locale}>
          <NextIntlClientProvider messages={messages} timeZone={timezone}>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
