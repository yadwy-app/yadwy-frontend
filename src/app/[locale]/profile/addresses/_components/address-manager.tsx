"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import type { Address } from "~/types/address";
import { AddressCard } from "./address-card";
import { AddressForm } from "./address-form";

interface AddressManagerProps {
  initialAddresses: Address[];
}

export function AddressManager({ initialAddresses }: AddressManagerProps) {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

  const handleAddAddress = (address: Address) => {
    setAddresses([...addresses, { ...address, id: Date.now().toString() }]);
    setIsAddDialogOpen(false);
  };

  const handleEditAddress = (address: Address) => {
    setAddresses(addresses.map((a) => (a.id === address.id ? address : a)));
    setIsEditDialogOpen(false);
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: string) => {
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
              Add New Address
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
              onSubmit={handleEditAddress}
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
            onEdit={(addr) => {
              setCurrentAddress(addr);
              setIsEditDialogOpen(true);
            }}
            onDelete={handleDeleteAddress}
            onSetDefault={handleSetDefault}
          />
        ))}
      </div>
    </div>
  );
}
