"use client";
import { FormProvider, useForm } from "react-hook-form";
import type { z } from "zod";
import { ShippingAddressFormFields } from "~/app/[locale]/(root)/billing/_components/shipping-form";
import { Button } from "~/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import type { AddressSchema, ShippingAddress } from "~/schemas";

interface AddressFormProps {
  address?: ShippingAddress;
  onSubmit: (address: z.infer<typeof AddressSchema>) => void;
  onCancel: () => void;
}

export function AddressForm({ address, onSubmit, onCancel }: AddressFormProps) {
  const form = useForm<z.infer<typeof AddressSchema>>({
    defaultValues: {
      name: address?.name ?? "",
      state: address?.state ?? "",
      zipCode: address?.zipCode ?? "",
      country: address?.country ?? "Egypt",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <DialogHeader>
        <DialogTitle>
          {address ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <DialogDescription>
          Please fill in all required information.
        </DialogDescription>
      </DialogHeader>

      <FormProvider {...form}>
        <div className="grid gap-4">
          <ShippingAddressFormFields />
        </div>
      </FormProvider>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {address ? "Save Changes" : "Add Address"}
        </Button>
      </DialogFooter>
    </form>
  );
}
