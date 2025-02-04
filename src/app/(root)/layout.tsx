import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex min-h-screen min-w-0 flex-col items-center justify-between px-6 md:px-10 lg:px-20 py-4 gap-y-20 max-w-6xl mx-auto">
        {children}
      </main>
    </>
  );
}
