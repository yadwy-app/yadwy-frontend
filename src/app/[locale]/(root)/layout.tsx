import type { Metadata } from "next";
import { Footer } from "~/components/layouts/footer";
import { Navbar } from "~/components/layouts/navbar";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between md:px-10 lg:px-20 py-4 gap-y-8 mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
