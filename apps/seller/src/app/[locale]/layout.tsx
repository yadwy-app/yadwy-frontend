import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTimeZone } from "next-intl/server";
import { Providers } from "../providers";
import "~/styles/globals.css";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { cn } from "~/lib/utils";
// TODO: only include the required font for the current lang of the user
import { cairo, lalezar, lexend } from "~/styles/fonts";
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
    <html lang={locale} dir={dir}>
      <body
        lang={locale}
        dir={dir}
        className={cn(
          "scrollbar scrollbar-thumb-rounded-2x min-h-screen transition-all",
          lexend.variable,
          lalezar.variable,
          cairo.variable,
        )}
      >
        <NextTopLoader color="var(--color-primary)" />
        <div dir={dir} lang={locale} className={cn(lexend.variable)}>
          <NextIntlClientProvider messages={messages} timeZone={timezone}>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
