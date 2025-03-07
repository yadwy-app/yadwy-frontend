"use client";

import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/redux/store";
import useTextDirection from "~/hooks/useDirection";
import { useLocale } from "next-intl";

export function Provider({
  children,
}: {
  children: ReactNode;
}) {
  const locale = useLocale();
  const direction = useTextDirection(locale);
  return (
    <div dir={direction}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </div>
  );
}
