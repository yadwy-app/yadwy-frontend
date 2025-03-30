"use client";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import type { Address } from "~/types/address";

interface AddressFormProps {
  address?: Address;
  onSubmit: (address: Address) => void;
  onCancel: () => void;
}

export function AddressForm({ address, onSubmit, onCancel }: AddressFormProps) {
  const [formData, setFormData] = useState<Partial<Address>>({
    name: address?.name ?? "",
    street: address?.street ?? "",
    city: address?.city ?? "",
    state: address?.state ?? "",
    zip: address?.zip ?? "",
    country: address?.country ?? "Egypt",
    type: address?.type ?? "Home",
    isDefault: address?.isDefault ?? false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Address, string>>>(
    {},
  );

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Address, string>> = {};

    if (!formData.name) newErrors.name = "الاسم مطلوب";
    if (!formData.street) newErrors.street = "العنوان مطلوب";
    if (!formData.city) newErrors.city = "المدينة مطلوبة";
    if (!formData.state) newErrors.state = "المحافظة مطلوبة";
    if (!formData.zip) newErrors.zip = "الرقم البريدي مطلوب";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Ensure all required fields are present and cast to Address
      const completeAddress: Address = {
        id: address?.id ?? Date.now().toString(),
        name: formData.name ?? "", // Already validated
        street: formData.street ?? "", // Already validated
        city: formData.city ?? "", // Already validated
        state: formData.state ?? "", // Already validated
        zip: formData.zip ?? "", // Already validated
        country: formData.country ?? "Egypt",
        type: formData.type ?? "Home",
        isDefault: formData.isDefault ?? false,
      };
      onSubmit(completeAddress);
    }
  };

  const handleChange = (field: keyof Address, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <DialogHeader>
        <DialogTitle>
          {address ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <DialogDescription>
          Please fill in all required information.
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="street">Address</Label>
          <Input
            id="street"
            value={formData.street}
            onChange={(e) => handleChange("street", e.target.value)}
            className={errors.street ? "border-red-500" : ""}
          />
          {errors.street && (
            <span className="text-sm text-red-500">{errors.street}</span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && (
              <span className="text-sm text-red-500">{errors.city}</span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="state">Country</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
              className={errors.state ? "border-red-500" : ""}
            />
            {errors.state && (
              <span className="text-sm text-red-500">{errors.state}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="zip">ZIP</Label>
            <Input
              id="zip"
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
              className={errors.zip ? "border-red-500" : ""}
            />
            {errors.zip && (
              <span className="text-sm text-red-500">{errors.zip}</span>
            )}
          </div>

          <div className="grid gap-2">
            <Label>Address Type</Label>
            <RadioGroup
              value={formData.type}
              onValueChange={(value) => handleChange("type", value)}
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
            </RadioGroup>
          </div>
        </div>
      </div>

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
