import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import useTextDirection from "~/hooks/useDirection";
import { cn } from "~/lib/utils";
import { ProviderStore } from "~/redux/provider";
import { lexend } from "~/styles/fonts";
import { Provider } from "../providers";
import { useMessages, useTimeZone } from "next-intl";

const locales = ["en", "ar"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "ar" };
}) {
  setRequestLocale(locale);
  const direction = useTextDirection(locale);
  const messages = useMessages();
  const timezone = useTimeZone();
  return (
    <div dir={direction} lang={locale} className={cn(lexend.variable)}>
      <Provider messages={messages} timeZone={timezone} locale={locale}>
        {children}
      </Provider>
    </div>
  );
}
