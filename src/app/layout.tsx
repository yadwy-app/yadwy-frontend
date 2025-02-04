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
      <head>
        <style>
          {`
            :root {
              --main-color: #6da0a0;
              --sec-color: #e2ebeb;
              --gray-color: #eef0f0;
              --dark-color: #1e1e1e;
            }
          `}
        </style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
