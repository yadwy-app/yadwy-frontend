"use client";

import { useTranslations } from "next-intl";
import { Separator } from "~/components/ui/separator";
import type { ShippingAddress } from "~/schemas";
import { AddressManager } from "./_components/address-manager";

const INITIAL_ADDRESSES: ShippingAddress[] = [
  {
    id: 1,
    name: "John Doe",
    state: "CA",
    zipCode: "12345",
    country: "United States",
    isDefault: true,
    address: "123 Main St",
    email: "jhon@email.com",
    phone: "+1 123 456 7890",
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
