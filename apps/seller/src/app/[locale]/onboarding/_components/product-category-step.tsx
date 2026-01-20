"use client";

import { Label } from "@yadwy/ui";
import { RadioGroup, RadioGroupItem } from "@yadwy/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@yadwy/ui";

export function ProductCategoryStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="product-category">Primary Product Category</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jewelry">Jewelry</SelectItem>
            <SelectItem value="home-decor">Home Decor</SelectItem>
            <SelectItem value="clothing">Clothing & Accessories</SelectItem>
            <SelectItem value="art">Art & Collectibles</SelectItem>
            <SelectItem value="craft-supplies">Craft Supplies</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Do you currently sell on other platforms?</Label>
        <RadioGroup defaultValue="no">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no">No</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="order-volume">Expected Monthly Order Volume</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 orders</SelectItem>
            <SelectItem value="11-50">11-50 orders</SelectItem>
            <SelectItem value="51-100">51-100 orders</SelectItem>
            <SelectItem value="100+">100+ orders</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
