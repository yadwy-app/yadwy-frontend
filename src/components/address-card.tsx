import { Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import type { ShippingAddress } from "~/schemas";
import { egyptianGovernorates } from '~/data/governorates';

export function AddressCard({
  className,
  onEdit,
  address,
  onDelete,
}: {
  className?: string;
  address: ShippingAddress;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">
              {address.name}{" "}
              {address.isDefault && (
                <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Default
                </span>
              )}
            </p>
            <p className="text-sm text-muted-foreground">{address.address}</p>
            <p className="text-sm text-muted-foreground">
              {
                egyptianGovernorates.find((gov) => gov.value === address.state)
                  ?.label
              }
              , Egypt
            </p>
            <p className="text-sm text-muted-foreground">{address.phone}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" onClick={() => onEdit()}>
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onDelete()}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
