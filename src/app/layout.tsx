import "~/styles/globals.css";

import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Toaster } from "~/components/ui/toaster";
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
