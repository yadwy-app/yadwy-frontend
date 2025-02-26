"use client";

import {
  type AbstractIntlMessages,
  NextIntlClientProvider,
  type useTimeZone,
} from "next-intl";
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/redux/store";

export function Provider({
  children,
  timeZone,
  messages,
  locale,
}: {
  children: ReactNode;
  timeZone: ReturnType<typeof useTimeZone>;
  messages: AbstractIntlMessages;
  locale: "en" | "ar";
}) {
  return (
    <NextIntlClientProvider
      messages={messages}
      timeZone={timeZone}
      locale={locale}
    >
    <ReduxProvider store={store}>{children}</ReduxProvider>
    </NextIntlClientProvider>
  );
}
