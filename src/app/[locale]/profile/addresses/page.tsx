import { Separator } from "~/components/ui/separator";
import { AddressManager } from "./_components/address-manager";
import type { Address } from "~/types/address";

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
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Addresses</h1>
        <p className="text-muted-foreground">
          Manage your shipping and billing addresses
        </p>
      </div>
      <Separator />
      <AddressManager initialAddresses={INITIAL_ADDRESSES} />
    </div>
  );
}