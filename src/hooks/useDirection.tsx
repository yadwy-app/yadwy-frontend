import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export default function useTextDirection(locale?: string) {
  const defaultLocale = useLocale();
  return isRtlLang(locale || defaultLocale) ? "rtl" : "ltr";
}
