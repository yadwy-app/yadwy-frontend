"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { AddressForm } from "./address-form";
import type { ShippingAddress, ShippingAddressFormData } from "~/schemas";
import { AddressCard } from "~/components/address-card";

interface AddressManagerProps {
  initialAddresses: ShippingAddress[];
}

export function AddressManager({ initialAddresses }: AddressManagerProps) {
  const [addresses, setAddresses] =
    useState<ShippingAddress[]>(initialAddresses);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<ShippingAddress | null>(
    null,
  );

  const handleAddAddress = (address: ShippingAddressFormData) => {
    setAddresses([
      ...addresses,
      { ...address, id: Date.now(), isDefault: addresses.length === 0 },
    ]);
    setIsAddDialogOpen(false);
  };

  const handleEditAddress = (id: number, address: ShippingAddressFormData) => {
    setAddresses(
      addresses.map((a) => (a.id === id ? { ...a, ...address } : a)),
    );
    setIsEditDialogOpen(false);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: number) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id,
      })),
    );
  };

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Saved Addresses</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New ShippingAddress
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <AddressForm
              onSubmit={handleAddAddress}
              onCancel={() => setIsAddDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {currentAddress && (
            <AddressForm
              address={currentAddress}
              onSubmit={(data) => handleEditAddress(currentAddress.id, data)}
              onCancel={() => {
                setIsEditDialogOpen(false);
                setCurrentAddress(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      <div className="grid gap-4 md:grid-cols-2">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={() => {
              setCurrentAddress(address);
              setIsEditDialogOpen(true);
            }}
            onDelete={() => handleDeleteAddress(address.id)}
            onSetDefault={
              address.isDefault ? undefined : () => handleSetDefault(address.id)
            }
          />
        ))}
      </div>
    </div>
  );
}
