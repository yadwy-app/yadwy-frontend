import { Lalezar, Lexend } from "next/font/google";

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: ["400"],
  variable: "--font-body",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "400"],
  variable: "--font-heading",
});

export { lalezar, lexend };
