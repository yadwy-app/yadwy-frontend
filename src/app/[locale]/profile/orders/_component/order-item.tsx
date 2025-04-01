import { Package } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
interface OrderItemProps {
  order: {
    id: string;
    date: string;
    status: string;
    total: string;
    items: number;
  };
}

export function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="border rounded-lg p-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="font-medium">{order.id}</h3>
          <p className="text-sm text-muted-foreground">{order.date}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <Badge
            className={cn(
              order.status === "Delivered" ? "bg-green-500" : "bg-red-500",
            )}
          >
            {order.status}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Package className="h-4 w-4 mr-2" />
          <span className="text-sm">{order.items} items</span>
        </div>
        <div className="mt-2 md:mt-0 flex items-center justify-between">
          <span className="font-medium md:mr-4">{order.total}</span>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
