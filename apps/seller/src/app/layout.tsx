import { Toaster } from "@yadwy/ui";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
