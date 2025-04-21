import { Cairo, Lalezar, Lexend } from "next/font/google";

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-lalezar",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "400"],
  variable: "--font-lexend",
});

export { lalezar, lexend, cairo };
