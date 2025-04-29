import { getTranslations } from "next-intl/server";
import { cache } from "react";

/**
 * A cached version of getTranslations that uses React's cache function
 * to memoize translation loading for better performance.
 *
 * This function is meant to be used in Server Components.
 *
 * @param namespace - The translation namespace to load
 * @param locale - The locale to use (optional, will use the current locale if not provided)
 * @returns A function to get translations for the specified namespace
 */
export const getCachedTranslations = cache(
  async (namespace: string, locale?: string) => {
    return await getTranslations({ locale, namespace });
  },
);

/**
 * Helper function to get all translations for a specific locale
 * Useful for preloading all translations for a locale
 *
 * @param locale - The locale to load translations for
 * @returns The full translation messages object
 */
export const getCachedLocaleMessages = cache(async (locale: string) => {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Fallback to English if the requested locale doesn't exist
    return (await import(`../../messages/en.json`)).default;
  }
});
