import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
});

export { alexandria, ibmPlexSansArabic };
