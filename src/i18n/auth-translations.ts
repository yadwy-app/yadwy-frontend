import { getTranslations } from "next-intl/server";
import { cache } from "react";

/**
 * Cached translations for auth pages using React 19's built-in cache function
 * This leverages the new automatic optimization features in React 19
 */
export const getAuthTranslations = cache(
  async (namespace: string, locale?: string) => {
    return await getTranslations({ locale, namespace });
  },
);

// Preload common auth namespaces for server components
export const preloadAuthTranslations = async (locale?: string) => {
  // Preload common auth translation namespaces
  await Promise.all([
    getAuthTranslations("Login", locale),
    getAuthTranslations("SignUp", locale),
    getAuthTranslations("common", locale),
  ]);
};
