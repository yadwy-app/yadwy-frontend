"use client";

import type { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/redux/store";

export function Provider({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <ReduxProvider store={store}>{children}</ReduxProvider>
  );
}
