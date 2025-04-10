"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MapPin, Plus } from "lucide-react";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import type { z } from "zod";
import { AddressCard } from "~/components/address-card";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { egyptianGovernorates } from "~/data/governorates";
import { AddressSchema, type ShippingAddress } from "~/schemas";

// Sample saved addresses
const savedAddresses = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    email: "ahmed@example.com",
    phone: "01234567890",
    address: "123 El-Tahrir St, Apt 4",
    country: "egypt",
    state: "cairo",
    zipCode: "11511",
    isDefault: true,
  },
  {
    id: 2,
    name: "Sara Ali",
    email: "sara@example.com",
    phone: "01098765432",
    address: "45 El-Horreya Rd",
    country: "egypt",
    state: "alexandria",
    zipCode: "21523",
    isDefault: false,
  },
];

export function ShippingForm({
  onSuccess,
}: {
  onSuccess: (data: ShippingAddress) => void;
}) {
  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "egypt",
      state: "",
      zipCode: "",
    },
  });

  const [showForm, setShowForm] = useState(savedAddresses.length === 0);
  const [selectedAddressId, setSelectedAddressId] = useState(
    savedAddresses.find((addr) => addr.isDefault)?.id ||
      (savedAddresses[0]?.id ?? null),
  );

  const handleAddNewAddress = () => {
    // Reset form fields
    form.reset({
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "egypt",
      state: "",
      zipCode: "",
    });
    setShowForm(true);
  };

  const handleSelectAddress = (addressId: number) => {
    setSelectedAddressId(addressId);
    // In a real app, you would update your state/context with the selected address
    const selectedAddress = savedAddresses.find(
      (addr) => addr.id === addressId,
    );
    if (selectedAddress) {
      // Update form values with the selected address
      form.reset(selectedAddress);
    }
  };

  const handleEditAddress = (address: ShippingAddress) => {
    // Populate form with address data
    form.reset({
      name: address.name,
      email: address.email,
      phone: address.phone,
      address: address.address,
      country: address.country,
      state: address.state,
      zipCode: address.zipCode,
    });
    setShowForm(true);
  };

  const handleDeleteAddress = (addressId: number) => {
    // In a real app, you would delete from your state/database
    console.log(`Delete address with ID: ${addressId}`);
    // If we're deleting the selected address, select another one
    if (addressId === selectedAddressId && savedAddresses.length > 1) {
      const newSelectedAddress = savedAddresses.find(
        (addr) => addr.id !== addressId,
      );
      setSelectedAddressId(newSelectedAddress?.id as number);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <p className="text-sm text-muted-foreground">
          Select or enter your shipping details
        </p>
      </div>

      {!showForm && savedAddresses.length > 0 ? (
        <div>
          <div className="flex flex-col gap-4">
            <RadioGroup
              value={selectedAddressId?.toString()}
              onValueChange={(value) =>
                handleSelectAddress(Number.parseInt(value))
              }
              className="space-y-3"
            >
              {savedAddresses.map((address) => (
                <div key={address.id} className="flex items-start space-x-2">
                  <div className="mt-1 w-10">
                    <RadioGroupItem
                      value={address.id.toString()}
                      id={`address-${address.id}`}
                    />
                  </div>
                  <div className="flex-1">
                    <AddressCard
                      key={address.id}
                      address={address}
                      className={`border ${selectedAddressId === address.id ? "border-primary" : "border-border"}`}
                      onEdit={() => handleEditAddress(address)}
                      onDelete={() => handleDeleteAddress(address.id)}
                    />
                  </div>
                </div>
              ))}
            </RadioGroup>

            <Button
              variant="secondary"
              className="grow ms-12"
              onClick={handleAddNewAddress}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New Address
            </Button>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              type="button"
              disabled={!selectedAddressId}
              onClick={() =>
                onSuccess(
                  savedAddresses.find(
                    (addr) => addr.id === selectedAddressId,
                  ) as ShippingAddress,
                )
              }
            >
              Next <ArrowRight />
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit(() => {
            setShowForm(false);
            // TODO: call the backend and save the address
          })}
        >
          <Form {...form}>
            <div className="grid gap-4 md:grid-cols-2">
              <ShippingAddressFormFields />
            </div>

            <div className="mt-6 flex gap-4 justify-end">
              {savedAddresses.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowForm(false)}
                >
                  <MapPin className="mr-2 h-4 w-4" /> Back to Saved Addresses
                </Button>
              )}
              <Button type="submit">Save Address</Button>
            </div>
          </Form>
        </form>
      )}
    </div>
  );
}

export function ShippingAddressFormFields() {
  const form = useFormContext();
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Ahmed Mohamed" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="ahmed@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="01234567890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input placeholder="123 El-Tahrir St, Apt 4" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value || "egypt"}
              disabled
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="egypt">Egypt</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Governorate</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select governorate" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {egyptianGovernorates.map((governorate) => (
                  <SelectItem key={governorate.value} value={governorate.value}>
                    {governorate.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="zipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input placeholder="11511" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
