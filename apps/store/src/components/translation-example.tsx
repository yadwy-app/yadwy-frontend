"use server";

import { getCachedTranslations } from "~/i18n/cached-translations";

/**
 * Example of a server component that uses cached translations
 * This is much more efficient than loading translations in each component
 */
export async function TranslationExample() {
  // Get cached translations for the "common" namespace
  const t = await getCachedTranslations("common");

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
    </div>
  );
}

/**
 * Example function that uses cached translations in a server action
 * This can be used in server actions where you need translations
 */
export async function translateServerAction(key: string, namespace = "common") {
  const t = await getCachedTranslations(namespace);
  return t(key);
}
