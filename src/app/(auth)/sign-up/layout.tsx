import "~/styles/globals.css";

import type { Metadata } from "next";
import { cn } from "~/lib/utils";
import { lexend } from "~/styles/fonts";
import { ProviderStore } from "~/redux/provider";

export const metadata: Metadata = {
  title: "تسجيل حساب",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="bg-[#eaf1f1] min-h-screen flex items-center justify-center">{children}</main>;
}
