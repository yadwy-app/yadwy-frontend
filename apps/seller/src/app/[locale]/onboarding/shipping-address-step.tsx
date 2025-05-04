"use client";

import { Input } from "@yadwy/ui";
import { Label } from "@yadwy/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@yadwy/ui";

export function ShippingAddressStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="address-name">Address Name</Label>
        <Input id="address-name" placeholder="e.g. Main Store, Workshop" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="street">Street Address</Label>
        <Input id="street" placeholder="Street address" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="City" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State/Province</Label>
          <Input id="state" placeholder="State/Province" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="zip">ZIP/Postal Code</Label>
          <Input id="zip" placeholder="ZIP/Postal Code" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
