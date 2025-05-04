"use client";

import { Button } from "@yadwy/ui";
import { Input } from "@yadwy/ui";
import { Label } from "@yadwy/ui";
import { Textarea } from "@yadwy/ui";
import { Store, Upload } from "lucide-react";

export function StoreInformationStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="store-name">Store Name</Label>
        <Input id="store-name" placeholder="Enter your store name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="store-logo">Store Logo</Label>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-md border">
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <Store className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload Logo
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="store-description">Store Description</Label>
        <Textarea
          id="store-description"
          placeholder="Tell customers about your store and products"
          rows={3}
        />
      </div>
    </div>
  );
}
