"use client";

import { useLocale } from "next-intl";
import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import useTextDirection from "~/hooks/useDirection";
import { store } from "~/redux/store";

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
