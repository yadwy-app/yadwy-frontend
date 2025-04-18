import type { ReactNode } from "react";
import "~/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NextTopLoader />
      {children}
    </>
  );
}
