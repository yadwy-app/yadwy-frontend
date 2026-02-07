"use client";

import type { UseFormReturn } from "react-hook-form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { egyptianGovernorates } from "~/data/governorates";
import type { CheckoutFormData } from "~/schemas/checkout";

interface DeliveryFormProps {
  form: UseFormReturn<CheckoutFormData>;
}

export function DeliveryForm({ form }: DeliveryFormProps) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const governorate = watch("delivery.governorate");

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Delivery</h2>

      {/* Country - Fixed to Egypt */}
      <Select defaultValue="egypt" disabled>
        <SelectTrigger className="h-12">
          <SelectValue placeholder="Country/Region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="egypt">Egypt</SelectItem>
        </SelectContent>
      </Select>

      {/* Name */}
      <div>
        <Input
          placeholder="Name"
          className="h-12"
          {...register("delivery.firstName")}
        />
        {errors.delivery?.firstName && (
          <p className="text-sm text-destructive mt-1">
            {errors.delivery.firstName.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Input
          type="tel"
          placeholder="Phone"
          className="h-12"
          {...register("contact.phone")}
        />
        {errors.contact?.phone && (
          <p className="text-sm text-destructive mt-1">
            {errors.contact.phone.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div>
        <Input
          placeholder="Address"
          className="h-12"
          {...register("delivery.address")}
        />
        {errors.delivery?.address && (
          <p className="text-sm text-destructive mt-1">
            {errors.delivery.address.message}
          </p>
        )}
      </div>

      {/* Apartment */}
      <Input
        placeholder="Apartment, suite, etc. (optional)"
        className="h-12"
        {...register("delivery.apartment")}
      />

      {/* City, Governorate, Postal code row */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Input
            placeholder="City"
            className="h-12"
            {...register("delivery.city")}
          />
          {errors.delivery?.city && (
            <p className="text-sm text-destructive mt-1">
              {errors.delivery.city.message}
            </p>
          )}
        </div>
        <div>
          <Select
            value={governorate}
            onValueChange={(value) => setValue("delivery.governorate", value)}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Governorate" />
            </SelectTrigger>
            <SelectContent>
              {egyptianGovernorates.map((gov) => (
                <SelectItem key={gov.value} value={gov.value}>
                  {gov.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.delivery?.governorate && (
            <p className="text-sm text-destructive mt-1">
              {errors.delivery.governorate.message}
            </p>
          )}
        </div>
        <div>
          <Input
            placeholder="Postal code (optional)"
            className="h-12"
            {...register("delivery.postalCode")}
          />
        </div>
      </div>
    </div>
  );
}
