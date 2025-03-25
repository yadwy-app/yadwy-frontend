import type { Metadata } from "next";
import { Footer } from "~/components/layouts/footer";
import Header from "~/components/layouts/header";
import { SiteFooter } from "~/components/layouts/site-foter";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-screen flex-col items-center justify-between gap-y-8 py-4 md:px-10 lg:px-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
