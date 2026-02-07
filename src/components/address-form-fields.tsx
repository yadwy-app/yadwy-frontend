"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { egyptianGovernorates } from "~/data/governorates";

export function AddressFormFields() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const state = watch("state");

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="state">Governorate</Label>
        <Select
          value={state}
          onValueChange={(value) => setValue("state", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select governorate" />
          </SelectTrigger>
          <SelectContent>
            {egyptianGovernorates.map((gov) => (
              <SelectItem key={gov.value} value={gov.value}>
                {gov.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.state && (
          <p className="text-sm text-destructive">
            {errors.state.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">Postal Code</Label>
        <Input id="zipCode" placeholder="12345" {...register("zipCode")} />
        {errors.zipCode && (
          <p className="text-sm text-destructive">
            {errors.zipCode.message as string}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input id="country" disabled value="Egypt" {...register("country")} />
      </div>
    </div>
  );
}
