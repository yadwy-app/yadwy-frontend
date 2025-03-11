"use client";
import { Home, Building, Edit2, Trash2, Star } from "lucide-react";
import type { Address } from "~/types/address";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";




interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) {
  const AddressIcon = address.type === "Home" ? Home : Building;

  return (
    <Card className={address.isDefault ? "border-primary" : ""}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AddressIcon className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-medium">
              {address.name}
            </CardTitle>
          </div>
          {address.isDefault && (
            <Badge variant="default" className="bg-primary">
              <Star className="mr-1 h-3 w-3" />
              Default Address
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-1 text-sm">
          <p className="text-gray-600">{address.street}</p>
          <p className="text-gray-600">
            {address.city}, {address.state}
          </p>
          <p className="text-gray-600">
            {address.country} - {address.zip}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(address)}>
            <Edit2 className="mr-1 h-4 w-4" />
            Edit
          </Button>
          {!address.isDefault && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(address.id)}
              className="text-destructive hover:bg-destructive/90 hover:text-white"
            >
              <Trash2 className="mr-1 h-4 w-4" />
              Delete
            </Button>
          )}
        </div>
        {!address.isDefault && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSetDefault(address.id)}
          >
            Apply Default
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
