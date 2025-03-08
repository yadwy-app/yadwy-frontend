"use client";

import type React from "react";

import { useState } from "react";
import { Edit, Home, Plus, Trash } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([
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
    {
      id: "2",
      name: "John Doe",
      street: "456 Work Ave",
      city: "Business City",
      state: "NY",
      zip: "67890",
      country: "United States",
      isDefault: false,
      type: "Work",
    },
  ]);

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
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Addresses</h1>
        <p className="text-muted-foreground">
          Manage your shipping and billing addresses
        </p>
      </div>
      <Separator />

      <div className="grid gap-6">
        <div className="flex justify-between items-center">
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

        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <Card key={address.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-base">{address.type}</CardTitle>
                  </div>
                  {address.isDefault && (
                    <div className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Default
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <p>{address.name}</p>
                  <p>{address.street}</p>
                  <p>
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p>{address.country}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                  <Dialog
                    open={isEditDialogOpen && currentAddress?.id === address.id}
                    onOpenChange={(open) => {
                      setIsEditDialogOpen(open);
                      if (!open) setCurrentAddress(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentAddress(address)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      {currentAddress && (
                        <AddressForm
                          address={currentAddress}
                          onSubmit={handleEditAddress}
                          onCancel={() => setIsEditDialogOpen(false)}
                        />
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    <Trash className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
                {!address.isDefault && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSetDefault(address.id)}
                  >
                    Set as Default
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
  type: string;
}

interface AddressFormProps {
  address?: Address;
  onSubmit: (address: Address) => void;
  onCancel: () => void;
}

function AddressForm({ address, onSubmit, onCancel }: AddressFormProps) {
  const [formData, setFormData] = useState<Omit<Address, "id">>({
    name: address?.name || "",
    street: address?.street || "",
    city: address?.city || "",
    state: address?.state || "",
    zip: address?.zip || "",
    country: address?.country || "United States",
    isDefault: address?.isDefault || false,
    type: address?.type || "Home",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, id: address?.id || "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {address ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <DialogDescription>
          {address
            ? "Update your address details below"
            : "Fill in the address details below"}
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="type">Address Type</Label>
          <RadioGroup
            defaultValue={formData.type}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, type: value }))
            }
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Home" id="home" />
              <Label htmlFor="home">Home</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Work" id="work" />
              <Label htmlFor="work">Work</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="street">Street Address</Label>
          <Input
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              defaultValue={formData.country}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, country: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isDefault"
            checked={formData.isDefault}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, isDefault: e.target.checked }))
            }
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <Label htmlFor="isDefault" className="text-sm font-normal">
            Set as default address
          </Label>
        </div>
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Address</Button>
      </DialogFooter>
    </form>
  );
}
