import type { Metadata } from "next";
import { Footer } from "~/components/layouts/footer";
import Header from "~/components/layouts/header";
import PhoneMenu from "~/components/layouts/phone-menu";
import { PalestineBanner } from "~/components/palestine-banner";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container min-h-screen flex flex-col items-center justify-between gap-y-8 py-8">
        {children}
      </main>
      <PhoneMenu />
      <PalestineBanner />
      <Footer />
    </>
  );
}
