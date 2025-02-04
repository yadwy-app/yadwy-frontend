import "~/styles/globals.css";

import type { Metadata } from "next";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "transition-all min-h-screen scrollbar scrollbar-thumb-rounded-2x",
        )}
      >
        {children}
      </body>
    </html>
  );
}
