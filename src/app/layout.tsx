import "~/styles/globals.css";

import { type Metadata } from "next";
import { Navbar } from "~/components/layouts/Navbar";
import { Footer } from "~/components/layouts/Footer";

export const metadata: Metadata = {
  title: "متجر يدوي",
  description: "احدث المنتجات الزراعية",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={``}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
