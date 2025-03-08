import { cn } from "~/lib/utils";
import { lexend } from "~/styles/fonts";
import { Provider } from "../providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const timezone = await getTimeZone();

  return (
    <div lang={locale} className={cn(lexend.variable)}>
      <NextIntlClientProvider messages={messages} timeZone={timezone}>
        <Provider>{children}</Provider>
      </NextIntlClientProvider>
    </div>
  );
}
