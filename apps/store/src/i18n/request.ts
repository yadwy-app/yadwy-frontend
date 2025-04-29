import type { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cache } from "react";
import { routing } from "./routing";

// Cache the loading of translation messages
const loadMessages = cache(
  async (locale: string): Promise<AbstractIntlMessages> => {
    console.log(`Loading translations for ${locale}`);
    return (
      (await import(`../../messages/${locale}.json`)) as {
        default: AbstractIntlMessages;
      }
    ).default;
  },
);

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await loadMessages(locale),
  };
});
