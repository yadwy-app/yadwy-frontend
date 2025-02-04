import type { Metadata } from "next";
import { Navbar } from "~/components/layouts/navbar";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto min-h-screen min-w-0 max-w-6xl px-6 py-4 md:px-10 lg:px-20">
        <Navbar />
        {children}
      </main>
    </>
  );
}
