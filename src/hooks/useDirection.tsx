import { useLocale } from "next-intl";

export default function useTextDirection(locale?: string) {
  const defaultLocale = useLocale();
  return (locale || defaultLocale) === "ar" ? "rtl" : "ltr";
}
