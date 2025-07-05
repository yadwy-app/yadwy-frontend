import type { Metadata } from "next";
import Image from "next/image";
import { BackButton } from "~/components/back-button";
import Logo from "~/components/logo";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description: "سجل الدخول معنا",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default async function LocaleLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center gap-2">
          <Logo />
          <BackButton />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full">{children}</div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/login/login.svg"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
