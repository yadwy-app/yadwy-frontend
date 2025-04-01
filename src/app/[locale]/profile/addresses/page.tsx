"use client";

import { useTranslations } from "next-intl";
import { Separator } from "~/components/ui/separator";
import type { Address } from "~/types/address";
import { AddressManager } from "./_components/address-manager";

const INITIAL_ADDRESSES: Address[] = [
  {
    id: "1",
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "United States",
    isDefault: true,
    type: "Home",
  },
  // ...other initial addresses
];

export default function AddressesPage() {
  const t = useTranslations("AddressesPage");
  const isRtl = t("title") !== "Addresses";

  return (
    <div className="space-y-6" dir={isRtl ? "rtl" : "ltr"}>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>
      <Separator />
      <AddressManager initialAddresses={INITIAL_ADDRESSES} />
    </div>
  );
}
