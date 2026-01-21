import { type AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages, getTimeZone } from "next-intl/server";
import { Providers } from "../providers";
import "@/styles/globals.css";
import { DashboardLayout } from "@/components/dashboard-layout";
import { NotSharedDashboardLayout } from "@/lib/not-shared-dashboard-layout";
// TODO: only include the required font for the current lang of the user
import { cairo, lalezar, lexend } from "@/styles/fonts";
import { cn } from "@yadwy/ui";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";
import NextTopLoader from "nextjs-toploader";

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
          lexend.variable,
          lalezar.variable,
          cairo.variable,
        )}
      >
        <LayoutProvider
          dir={dir}
          locale={locale}
          messages={messages}
          timezone={timezone}
        >
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}

async function LayoutProvider({
  children,
  dir,
  locale,
  messages,
  timezone,
}: {
  children: React.ReactNode;
  dir: string;
  locale: string;
  messages: AbstractIntlMessages;
  timezone: string;
}) {
  const headerList = headers();
  const pathname = (await headerList).get("x-current-path");
  console.log("Layout pathname", pathname);

  return (
    <>
      <NextTopLoader color="var(--color-primary)" />
      <div dir={dir} lang={locale} className={cn(lexend.variable)}>
        <NextIntlClientProvider messages={messages} timeZone={timezone}>
          <Providers>
            {NotSharedDashboardLayout.includes(pathname as string) ? (
              children
            ) : (
              <DashboardLayout>{children}</DashboardLayout>
            )}
          </Providers>
        </NextIntlClientProvider>
      </div>
    </>
  );
}
