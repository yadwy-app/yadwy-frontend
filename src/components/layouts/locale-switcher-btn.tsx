"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "~/i18n/routing";
import { Button } from "../ui/button"; // استيراد زرار shadcn/ui
import { cn } from '~/lib/utils';

type Props = {
  className?: string;
};

export default function LocaleSwitcherLangBtn({ className }: Props) {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";

    startTransition(async () => {
      router.replace(
        // @ts-expect-error -- see explanation above
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="link"
      className={cn("text-foreground", className)}
    >
      {locale === "en" ? "العربية" : "English"}
    </Button>
  );
}
