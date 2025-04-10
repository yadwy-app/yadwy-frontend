"use client";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Logo() {
  const logo = useTranslations("common");

  return (
    <Link href="/" className="font-heading text-2xl font-bold hidden sm:block">
      {logo("Logo")}
    </Link>
  );
}
