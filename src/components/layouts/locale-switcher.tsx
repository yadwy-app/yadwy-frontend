"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "~/i18n/routing";
import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"; // Import shadcn/ui components

type Props = {
  className?: string;
};

export default function LocaleSwitcherLang({ className }: Props) {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const localActive = useLocale();

  function changeLanguage(value: string) {
    const nextLocale = value; // Use the selected value directly
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <Select onValueChange={changeLanguage} defaultValue={localActive}>
      <SelectTrigger className={cn("w-[110px] bg-transparent ", className)}>
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">
          <div className="flex gap-2 items-center">
            <Image
              src="/footer/flag-of-palestine.webp"
              alt=""
              width={20}
              height={10}
              className="w-[20px] h-[13px]"
            />
            <span>العربية</span>
          </div>
        </SelectItem>
        <SelectItem value="en" className="text-sm">
          <div className="flex gap-2 items-center">
            <Image
              src="/footer/flag-of-us.webp"
              alt=""
              width={20}
              height={10}
              className="w-[20px] h-[13px]"
            />
            <span>English</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
